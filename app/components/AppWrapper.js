import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// components
import {Avatar, AppText, AppIcon} from '.';

// utils
import {constants, colors} from '../utils';

const {screenWidth, screenHeight} = constants;
const {BoldText} = AppText;

const AppWrapper = ({
  children,
  isScroll = false,
  showHeader = false,
  showWelcome = false,
}) => {
  return (
    <SafeAreaView style={styles.parentContainer}>
      {isScroll == true ? (
        <React.Fragment>
          {showWelcome == true && (
            <View style={styles.welcomeContainer}>
              <BoldText style={styles.welcomeName}>Hi, John Doe</BoldText>

              <View style={styles.avatarContainer}>
                <Icon
                  name="cart"
                  color={colors.primaryGray}
                  size={30}
                  style={{marginHorizontal: 10}}
                />
                <Avatar />
              </View>
            </View>
          )}

          <ScrollView
            nestedScrollEnabled
            style={styles.childContainer}
            showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        </React.Fragment>
      ) : (
        <View style={styles.childContainer}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: screenWidth,
    height: screenHeight - 100,
  },
  childContainer: {
    paddingHorizontal: constants.innerGap,
  },
  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: constants.gap,
    paddingHorizontal: constants.innerGap,
  },
  welcomeName: {
    color: colors.primaryGray,
  },
  avatarContainer: {flexDirection: 'row', alignItems: 'center'},
});

export default AppWrapper;
