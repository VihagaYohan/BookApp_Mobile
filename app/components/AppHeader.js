import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

// components
import {FontAwesomeIcon, MaterialIcon} from './AppIcon';
import {AppText} from './index';

// utils
import {constants, colors} from '../utils';

const {screenWidth} = constants;
const {BoldText, RegularText, MediumText} = AppText;

const AppHeader = ({title, isRight, leftPress, rightPress}) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        name="chevron-left"
        onPress={() => leftPress('hello, world')}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <BoldText>{title}</BoldText>
      </View>
      <FontAwesomeIcon
        name="bookmark"
        onPress={
          isRight == true
            ? () => rightPress()
            : () => {
                return;
              }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
  },
});

export default AppHeader;
