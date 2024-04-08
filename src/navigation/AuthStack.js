import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {LoginScreen} from '../screens';
import About from '../screens/about';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};