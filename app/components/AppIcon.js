import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Material_Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontawesome_Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5_Icon from 'react-native-vector-icons/FontAwesome5';

// constants
import {colors, constants} from '../utils';

export const MaterialIcon = ({
  name,
  color = colors.primaryPurple,
  size = 25,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Material_Icon
        name={name}
        size={size}
        color={color}
        style={[styles.icon]}
      />
    </TouchableOpacity>
  );
};

export const FontAwesomeIcon = ({
  name,
  color = colors.primaryPurple,
  size = 25,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Fontawesome_Icon
        name={name}
        size={size}
        color={color}
        style={[styles.icon]}
      />
    </TouchableOpacity>
  );
};

export const FontAwesomeIcon5 = ({
  name,
  color = colors.primaryPurple,
  size = 25,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <FontAwesome5_Icon
        name={name}
        size={size}
        color={color}
        style={[styles.icon]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: constants.gap,
  },
});

export default {
  MaterialIcon,
  FontAwesomeIcon,
  FontAwesomeIcon5
};
