import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import About from '../screens/about';
import GetStartPage from '../screens/getStart';
import LoginScreen from '../screens/login';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
        <Stack.Screen name="GetStartPage" component={GetStartPage} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};