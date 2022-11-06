import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

// components
import {AppText} from '.';


// constants
import {constants, colors} from '../utils';

const {RegularText} = AppText;

const AppButton = ({name, isLoading=false, onPress=()=>{return},
customStyle}) => {
  return (
    <TouchableOpacity style={[styles.container,customStyle]} onPress={() => onPress()}>
      {isLoading && (
        <ActivityIndicator size="small" color={colors.primaryWhite} />
      )}
      <RegularText style={styles.labelStyle}>{name}</RegularText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: constants.buttonHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryPurple,
    borderRadius:constants.buttonRadius
  },
  labelStyle: {
    color: colors.primaryWhite,
  },
});

export default AppButton;
