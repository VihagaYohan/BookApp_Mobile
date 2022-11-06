import React, {Component,useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';

// components
import {AppWrapper, AppText} from './index';

// constants
import {colors, constants} from '../utils';
import {RegularText} from './AppText';
const {BoldText} = AppText;

const Error = ({message}) => {
  const [visibility, setVisibility] = useState(true);

  // handle onclick event
  const handlePress = () => {
    setVisibility(false);
  };

  return (
    <AppWrapper>
      <Modal visible={visibility} animationType="slide" transparent>
        <View style={styles.childContainer}>
          <View stylel={styles.messageContainer}>
            <RegularText>{message}</RegularText>

            <TouchableOpacity onPress={() => handlePress()}>
              OK
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    aspectRatio: 1,
  },
  childContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparentBlack,
  },
  messageContainer: {
    width: '80%',
    backgroundColor: colors.primaryWhite,
    paddingVertical: constants.innerGap,
  },
});

export default Error;
