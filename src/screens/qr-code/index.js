// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   Alert,
//   TouchableOpacity,
// } from 'react-native';
// import {RNCamera} from 'react-native-camera';
// import axios from 'axios';

// const QRcodeScanner = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [scanned, setScanned] = useState(false);

//   const handleBarCodeRead = async ({data}) => {
//     console.log('=== data ====', data);

//     if(data?.sessionId){

//     try {
//       console.log('---- call ----');
//       let nonce = data.sessionId
//       const sessionId = data.nonce;
//       let res = await axios.post('http://localhost:8000/authenticate', {
//         nonce,
//         sessionId,
//       });

//       console.log('== res =====', res)

//       const socket = new WebSocket(`ws://192.168.1.5:8080/${sessionId}`);

//       socket.onopen = () => {
//         console.log('WebSocket connection opened');
//         // setMessage('Connected to WebSocket server');
//       };

//       socket.onmessage = event => {
//         console.log('Message from server:', event.data);
//       };

//       // socket.onclose = () => {
//       //     console.log('WebSocket connection closed');
//       //     setMessage('WebSocket connection closed');
//       // };

//       socket.onerror = error => {
//         console.error('WebSocket error:', error);
//         // setMessage('WebSocket error');
//       };
//     } catch (error) {
//       console.log('== error ===>>', error);
//     }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {!isAuthenticated ? (
//         <>
//           <RNCamera
//             style={styles.camera}
//             onBarCodeRead={handleBarCodeRead}
//             captureAudio={false}>
//             <View style={styles.scanBox} />
//           </RNCamera>
//           <Button title="Rescan" onPress={() => setScanned(false)} />
//         </>
//       ) : (
//         <Text style={styles.authenticatedText}>Authenticated!</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   camera: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//   },
//   scanBox: {
//     width: 200,
//     height: 200,
//     borderWidth: 2,
//     borderColor: 'red',
//     borderRadius: 10,
//     alignSelf: 'center',
//   },
//   authenticatedText: {
//     fontSize: 24,
//     color: 'green',
//   },
// });

// export default QRcodeScanner;



import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import axios from 'axios';

const QRcodeScanner = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [scanned, setScanned] = useState(false);

  const handleBarCodeRead = async ({data}) => {
    if (!scanned) {
      setScanned(true);
      console.log('=== data ====', data);

      let parsedData;
      try {
        parsedData = JSON.parse(data); // assuming data is a JSON string
      } catch (error) {
        console.error('Error parsing QR code data:', error);
        setScanned(false);
        return;
      }

      if (parsedData?.sessionId) {
        try {
          console.log('---- call ----');
          //   const response =await axios.get('http://192.168.1.5:8000/generate-qr')
          //   console.log('=== response.data.sessionId ===', response.data.sessionId)
              let nonce = data.sessionId
            let sessionId = data.nonce;
          //   const res = await axios.post('http://192.168.1.5:8000/authenticate', {
          //     nonce,
          //     sessionId,
          //   });

          //   console.log('== res =====', res);

          const response = await fetch('http://192.168.1.x:8000/authenticate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({nonce, sessionId}),
          });
          const res = await response.json();
          console.log('== res =====', res);

          const socket = new WebSocket(`ws://192.168.1.5:8080/${sessionId}`);

          socket.onopen = () => {
            console.log('WebSocket connection opened');
          };

          socket.onmessage = event => {
            console.log('Message from server:', event.data);
          };

          socket.onerror = error => {
            console.error('WebSocket error:', error);
          };

          socket.onclose = () => {
            console.log('WebSocket connection closed');
          };

          setIsAuthenticated(true);
        } catch (error) {
          console.log('== error ===>>', error);
          Alert.alert('Error', 'Failed to authenticate.');
          setScanned(false);
        }
      } else {
        Alert.alert(
          'Invalid QR Code',
          'The QR code does not contain a valid session ID.',
        );
        setScanned(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      {!isAuthenticated ? (
        <>
          <RNCamera
            style={styles.camera}
            onBarCodeRead={handleBarCodeRead}
            captureAudio={false}>
            <View style={styles.scanBox} />
          </RNCamera>
          {scanned && (
            <Button title="Rescan" onPress={() => setScanned(false)} />
          )}
        </>
      ) : (
        <Text style={styles.authenticatedText}>Authenticated!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  scanBox: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    alignSelf: 'center',
  },
  authenticatedText: {
    fontSize: 24,
    color: 'green',
  },
});

export default QRcodeScanner;
