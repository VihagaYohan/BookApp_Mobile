import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import moment from 'moment';

// services
import {getBookReviews} from '../services/Books';

// componetns
import {AppText} from '../components';

// constants
import {constants, colors, fonts} from '../utils';

const {RegularText, MediumText, BoldText} = AppText;

const ReviewList = ({data, bookId}) => {
  // review item
  const ReviewItem = ({item, index}) => {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <BoldText style={styles.userName}>{item.userId.name}</BoldText>
          <RegularText style={styles.date}>
            {moment().endOf('date').fromNow()}
          </RegularText>
        </View>

        <RegularText>{item?.review}</RegularText>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `review-${index}`}
        renderItem={({item, index}) => {
          return <ReviewItem item={item} index={index} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.primaryBlack,
    backgroundColor: colors.primaryWhite,
    paddingVertical: constants.innerGap,
  },
  HeaderSection: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  userName: {
    color: colors.primaryBlack,
    fontSize: fonts.regular,
  },
  date: {
    color: colors.primaryGray,
    fontSize: fonts.regular,
  },
});

export default ReviewList;
