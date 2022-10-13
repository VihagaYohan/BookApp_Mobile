import React, {Component, useRef} from 'react';
import {StyleSheet, View, Animated, Alert} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// screens
import {
  HomeScreen,
  DetailScreen,
  SearchScreen,
  ProfileScreen,
  CartScreen,
} from '../screens';

// constants
import {colors, constants} from '../utils';

const {screenWidth} = constants;

const tab = createBottomTabNavigator();

const App = () => {
  const tabOffsetValue = useRef(new Animated.Value(0));
  return (
    <>
      <tab.Navigator
        initialRouteName="app"
        tabBarOptions={{
          showLabel: false,
          activeTintColor: colors.primaryPurple,
          inactiveTintColor: colors.primaryGray,
          style: styles.bottomTabStyles,
        }}>
        <tab.Screen
          name="app"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focus, size, color}) => (
              <View style={styles.iconContainer}>
                <Icon name="book-open" size={size} color={color} />
              </View>
            ),
          }}
          listeners={({navigation, router}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue.current, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <tab.Screen
          name="serach"
          component={SearchScreen}
          options={{
            tabBarIcon: ({focus, size, color}) => (
              <View style={styles.iconContainer}>
                <Icon name="search" size={size} color={color} />
              </View>
            ),
          }}
          listeners={({navigation, router}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue.current, {
                toValue: screenWidth / 4,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <tab.Screen
          name="cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({focus, size, color}) => (
              <View style={styles.iconContainer}>
                <MaterialIcon name="bookmark" size={size} color={color} />
              </View>
            ),
          }}
          listeners={({navigation, router}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue.current, {
                toValue: (screenWidth / 4) * 2,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focus, size, color}) => (
              <View style={styles.iconContainer}>
                <MaterialIcon name="account" size={size} color={color} />
              </View>
            ),
          }}
          listeners={({navigation, router}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue.current, {
                toValue: (screenWidth / 4) * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </tab.Navigator>

      <Animated.View
        style={[
          styles.barStyle,
          {
            transform: [
              {
                translateX: tabOffsetValue.current,
              },
            ],
          },
        ]}></Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  bottomTabStyles: {
    backgroundColor: colors.primaryWhite,
    elevation: 0,
    height: 60,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  barStyle: {
    width: (screenWidth / 4),
    height: 2,
    backgroundColor: colors.primaryPurple,
    position: 'absolute',
    bottom: 59,
  },
});

export default App;
