import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack'
// screens
import {
  LoginScreen,
  RegisterScreen
} from '../screens';

// navigators 
import {BottomNavigator} from './index'

const stack = createStackNavigator();

const App = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="login" component={LoginScreen} />
      <stack.Screen name="register" component={RegisterScreen} />
      <stack.Screen name="bottom" component={BottomNavigator} />
    </stack.Navigator>
  );
};

export default App;
