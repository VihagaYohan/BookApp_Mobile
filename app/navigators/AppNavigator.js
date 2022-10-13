import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack'
// screens
import {
  HomeScreen,
  DetailScreen,
  CartScreen,
  ProfileScreen,
  PaymentScreen
} from '../screens';

const stack = createStackNavigator();

const App = () => {
  return (
    <stack.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
      <stack.Screen name="home" component={HomeScreen} />
      <stack.Screen name="detail" component={DetailScreen} />
      <stack.Screen name="cart" component={CartScreen} />
      <stack.Screen name="profile" component={ProfileScreen} />
    </stack.Navigator>
  );
};

export default App;
