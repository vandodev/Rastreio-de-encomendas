import React, {useState, useEffect} from 'react';
import {Text, View, Button,Alert } from 'react-native';
import {css} from './assets/css/Css';

import Home from './views/Home';
import Login from './views/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
