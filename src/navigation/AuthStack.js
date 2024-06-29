import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import About from '../screens/about';
import GetStartPage from '../screens/getStart';
import LoginScreen from '../screens/login';
import VideoPlayer from '../screens/videoPlayer';
import QRcodeScanner from '../screens/qr-code';
import Landing from '../pages/landing';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="GetStartPage" component={GetStartPage} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        <Stack.Screen name="QRcodeScanner" component={QRcodeScanner} />
    </Stack.Navigator>
  );
};