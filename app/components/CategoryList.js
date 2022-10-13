import React, {Component, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Alert,
} from 'react-native';

// constants
import {fonts, colors, appStyles, constants} from '../utils';


// componetns
import {AppText, SectionTitle} from '.';

const {BoldText, RegularText, MediumText} = AppText;
const {screenWidth, screenHeight} = constants;

const CategoryList = ({data, ListItem, ...otherProps}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => {

        let booksList = item.books;
        return (
          <View
            style={{
              width: '100%',
            }}>
            <SectionTitle title={item.name} />

            <FlatList
              data={booksList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <ListItem
                    id={item._id}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    price={parseInt(item.price).toString()}
                    handlePress={()=>Alert.alert('Hello world')}
                  />
                );
              }}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CategoryList;
