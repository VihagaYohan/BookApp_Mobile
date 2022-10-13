import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Material_Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontawesome_Icon from 'react-native-vector-icons/FontAwesome';

// constants
import {colors} from '../utils';

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

const styles = StyleSheet.create({
  icon: {
    borderWidth: 1,
  },
});

export default {
  MaterialIcon,
  FontAwesomeIcon,
};
