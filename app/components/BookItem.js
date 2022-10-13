import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native'

// constants
import {fonts, colors, appStyles, constants} from '../utils';


// componetns
import {AppText, SectionTitle} from '.';

const {BoldText, RegularText, MediumText} = AppText;
const {screenWidth, screenHeight} = constants;

const BookItem = ({id, title, price, imageUrl, handlePress}) => {
  const navigation = useNavigation();

  // handle onPress
  const handleOnPress = async () => {
    navigation.navigate('detail')
  };

  return (
    <TouchableOpacity
      style={{
        width: (screenWidth - constants.innerGap * 2) / 2,
        overflow: 'hidden',
        marginRight: constants.gap,
      }}
      onPress={() => handleOnPress()}>
      <Image
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 186 / 290,
          borderRadius: constants.buttonRadius * 2,
        }}
        source={{uri: imageUrl}}
      />

      <BoldText style={{color: colors.primaryPurple, fontSize: 20}}>
        {title}
      </BoldText>
      <RegularText style={{fontSize: 20}}>Rs. {price}</RegularText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default BookItem;
