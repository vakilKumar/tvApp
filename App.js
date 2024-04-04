import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import PDFExample from './src/pdf';
import { Provider } from 'react-redux';
import store from './src/store';
import Home from './src/pages/home';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // disptch(fetchDataFromDummyApiCreater())
  }
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Text style={styles.title}>Hello from {'\n'}React Native {Platform.OS === 'web' ? 'web' : 'android'}!</Text>
      <TouchableOpacity
        onPress={handleClick}
        style={styles.button}>
        <Text>Click</Text>
      </TouchableOpacity>


      <Text>You clicked {count} times!</Text>
      <Home/>
    </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E8BD',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ADBDFF',
    padding: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
  },
});

export default App;