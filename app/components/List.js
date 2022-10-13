import React, {Component} from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';

// constants
import {fonts, colors, appStyles, constants} from '../utils';


// componetns
import {AppText, SectionTitle} from '.';

const List = ({data, ListItem, ...otherProps}) => {
    console.log('trending list')
    console.log(data)
  return (
    <FlatList
      data={data}
      {...otherProps}
      renderItem={({item, index}) => {
        console.log(item)
        return (
        <ListItem
            id={item._id}
            title={item.title}
            imageUrl={item.imageUrl}
            price={parseInt(item.price).toString()}
            handlePress={() => Alert.alert('Hello world')}
          /> 
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default List;
