import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from './Login';
import Register from './Register';
import Home from './Home'

export const HomeStack = StackNavigator({
    MH_Login: {
      screen: Login,
      navigationOptions: {
          header: null,
      }
    },
    MH_Register: {
        screen: Register,
        navigationOptions: {
            headerTintColor: '#363636',
            headerStyle: {
                backgroundColor: '#FFB5C5',
            },
            headerTitleStyle: { 
                color: '#363636' 
            },
            title: 'Register'
        }
      },
      MH_Home: {
        screen: Home,
        navigationOptions: {
            headerTintColor: '#363636',
            headerStyle: {
                backgroundColor: '#FFB5C5',
            },
            headerTitleStyle: { 
                color: '#363636' 
            },
            title: 'Home'
        }
      },
  });