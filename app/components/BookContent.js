import React, {Component,useEffect,useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

// components
import {AppText} from './index';

// utils
import {constants, colors} from '../utils';

const {BoldText, RegularText, MediumText} = AppText;

const Content = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, _) => `item - ${item}`}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View>
              <RegularText>{item}</RegularText>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Content;
