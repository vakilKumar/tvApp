import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';
import dummy_video from '../../assets/video/dummy.mp4'

const VideoPlayer = () => {

  return (
    <View style={styles.container}>
      <Video
        // source={{ uri: 'https://file-examples.com/storage/fef545ae0b661d470abe676/2017/04/file_example_MP4_480_1_5MG.mp4' }}
        source={require('../../assets/video/dummy.mp4')}
        style={styles.video}
        controls={true}
        resizeMode="cover"
        onError={(error) => console.log('Video Error ----->>  ', error)}
        onLoad={(data) => console.log('Video Loaded: ', data)}
        onProgress={(progress) => console.log('Video Progress: ', progress)}
      />
    </View>
  );
};


let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue'
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9, // Standard aspect ratio for TV
  }
  });

export default VideoPlayer;
