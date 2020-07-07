import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import login from '../screens/login';
import {createAppContainer} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/login';
import Home from '../screens/home';
import OTP from '../screens/otp';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="login"
          component={Login}
          options={{title: 'LOGIN'}}
        />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen
          name="otp"
          component={OTP}
          options={{
            cardStyle: {
              backgroundColor: '#b19cd9',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
