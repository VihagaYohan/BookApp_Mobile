import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, View, Text, Alert, ActivityIndicator} from 'react-native';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';

// components
import {
  AppText,
  AppWrapper,
  AppIcon,
  AppButton,
  Carousel,
  SectionTitle,
  CategoryList,
  List,
  BookItem,
  Loading,
} from '../components';

// constants
import {colors, utils} from '../utils';

// service
import {BookService} from '../services';

const {getTrendingBooks, booksForCategory} = BookService;

const {BoldText, RegularText, MediumText} = AppText;
const {MaterialIcon} = AppIcon;
const {printLog} = utils;

const DATA = [
  {
    id: '1',
    url: '../assets/images/image_1.png',
  },
  {
    id: '1',
    url: '../assets/images/image_2.png',
  },
  {id: '1', url: '../assets/images/image_3.png'},
];



const Screen = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  // get books
  const fetchBooks = async () => {
    try {
      setIsLoading(true);
      let result = await Promise.all([getTrendingBooks(), booksForCategory()]);
      if (result?.length == 0) {
        printLog('There are no content to show');
      } else {
        setTrendingList(result[0].data);
        setBookList(result[1].data);
        setIsLoading(false);
      }
    } catch (e) {
      printLog(e);
      setIsLoading(false);
    }
  };

  console.log(bookList);
  return (
    <AppWrapper isScroll={true} showWelcome={true}>
      {isLoading == true ? (
        <Loading />
      ) : (
        <React.Fragment>
          <MediumText style={styles.title}>Find your favorite books</MediumText>

          <Carousel data={DATA} />

          <SectionTitle title="Trending Books" />
          <List
            data={trendingList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ListItem={BookItem}
          />

          <CategoryList
            data={bookList}
            horizontal={false}
            nestedscrollEnabled={true}
            ListItem={BookItem}
          />
        </React.Fragment>
      )}
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: responsiveScreenFontSize(3),
    color: colors.primaryBlack,
  },
});

export default Screen;
