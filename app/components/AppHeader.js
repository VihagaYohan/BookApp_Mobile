import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'

// components
import {FontAwesomeIcon, MaterialIcon} from './AppIcon';
import {AppText} from './index';

// utils
import {constants, colors} from '../utils';

const {screenWidth} = constants;
const {BoldText, RegularText, MediumText} = AppText;

const AppHeader = ({title, isRight, leftPress, rightPress}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        name="chevron-left"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.titleContainer}>
        <BoldText style={styles.titleStyle}>{title}</BoldText>
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
    alignItems: 'center',
  },
  titleContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  titleStyle:{
    color:colors.primaryPurple
  }
});

export default AppHeader;
