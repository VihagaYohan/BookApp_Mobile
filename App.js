/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  LogBox
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

// navigators
import {AppNavigator,BottomNavigator} from './app/navigators'

const App = () => {
  useEffect(()=>{
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  },[])
 
  return (
    <NavigationContainer>
      <BottomNavigator/>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
 
});

export default App;
