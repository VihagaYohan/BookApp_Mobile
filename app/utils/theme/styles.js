import {StyleSheet} from 'react-native';

// constants
import constants from '../constants'

export const styles = StyleSheet.create({
  background: {
    backgroundColor: 'blue',
  },
  backgroundColor: 'red',
  flex_Row: {
    flexDirection: 'row',
    width: '100%',
  },
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  bookItem:{
    width: '100%',
    height: undefined,
    aspectRatio: 186 / 290,
    borderRadius: constants.buttonRadius*2
  }
});

export default styles;
