import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// components
import {FontAwesomeIcon, MaterialIcon} from './AppIcon';
import {AppText} from './index';

// utils
import {constants, colors} from '../utils';

const {screenWidth} = constants;
const {BoldText, RegularText, MediumText} = AppText;

const AppHeader = ({
  title,
  isRightIcon = false,
  isLeftIcon = false,
  isRight,
  leftPress,
  rightPress,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {isLeftIcon == true ? (
        <FontAwesomeIcon
          name="chevron-left"
          onPress={() => navigation.goBack()}
        />
      ) : (
        <View style={{width: 25, height: 25}}></View>
      )}

      <View style={styles.titleContainer}>
        <BoldText style={styles.titleStyle}>{title}</BoldText>
      </View>
      {isRightIcon == true ? (
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
      ) : (
        <View style={{width: 25, height: 25}}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: colors.primaryPurple,
  },
});

export default AppHeader;
