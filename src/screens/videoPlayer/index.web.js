import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const VideoPlayer = () => {
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
