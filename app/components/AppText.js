import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

// utility
import {fonts, colors} from '../utils';



// bold text
export const BoldText = ({children, style, ...props}) => {
  return (
    <Text style={[styles.boldText, style]} {...props}>
      {children}
    </Text>
  );
};

// regular text
export const RegularText = ({children, style, ...props}) => {
  return (
    <Text style={[styles.regularText, style]} {...props}>
      {children}
    </Text>
  );
};

// medium text
export const MediumText = ({children,style,...props})=>{
  return(
    <Text style={[styles.mediumText,style]}{...props}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  boldText: {
    fontFamily: fonts.boldFont,
    fontSize: fonts.extraLarge,
    color: colors.primaryGray,
  },
  regularText: {
    fontFamily: fonts.regularFont,
    fontSize: fonts.regular,
    color: colors.primaryGray,
  },
  mediumText:{
    fontFamily:fonts.mediumFont,
    fontSize:fonts.medium,
    color:colors.primaryGray
  }
});

export default {
  BoldText,
  RegularText,
  MediumText
};
