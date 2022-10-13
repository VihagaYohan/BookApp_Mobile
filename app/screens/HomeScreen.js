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

const TRENDING = [
  {
    _id: '632fbcabb2f3035f65c1dce2',
    name: 'Fantacy',
    isDeleted: true,
    createdAt: '2022-09-25T02:27:55.091Z',
    updatedAt: '2022-09-25T02:30:09.304Z',
    __v: 0,
    books: [
      {
        _id: '633174954e0170d5a117d755',
        title: 'Sample',
        authors: ['633171faf4b50ba3b3492c22'],
        genere: '632fbcabb2f3035f65c1dce2',
        language: 'hindi',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
        __v: 0,
        isTrending: true,
        imageUrl:
          'http://192.168.1.2:5000/uploads/2022-10-05T07-18-31.286Zhobbit.png',
        updatedAt: '2022-10-05T07:18:31.301Z',
      },
    ],
  },
  {
    _id: '63427bc0cfb22b040e8c4bf3',
    name: 'Fantacy',
    isDeleted: true,
    createdAt: '2022-09-25T02:27:55.091Z',
    updatedAt: '2022-09-25T02:30:09.304Z',
    __v: 0,
    books: [
      {
        _id: '633174954e0170d5a117d755',
        title: 'Sample',
        authors: ['633171faf4b50ba3b3492c22'],
        genere: '63427bc0cfb22b040e8c4bf3',
        language: 'hindi',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
        __v: 0,
        isTrending: true,
        imageUrl:
          'http://192.168.1.2:5000/uploads/2022-10-05T07-18-31.286Zhobbit.png',
        updatedAt: '2022-10-05T07:18:31.301Z',
      },
    ],
  },
  {
    _id: '633d56be8ec9149f45183294',
    name: 'Adventure',
    isDeleted: true,
    createdAt: '2022-09-25T02:27:55.091Z',
    updatedAt: '2022-09-25T02:30:09.304Z',
    __v: 0,
    books: [
      {
        _id: '633d56b38ec9149f45183293',
        title: 'Hobbit',
        authors: ['633171faf4b50ba3b3492c22'],
        genere: '633d56be8ec9149f45183294',
        language: 'hindi',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
        __v: 0,
        isTrending: true,
        imageUrl:
          'http://192.168.1.2:5000/uploads/2022-10-05T07-13-40.986Zhobbit.png',
        updatedAt: '2022-10-05T07:13:41.013Z',
      },
      {
        _id: '633d56ef8ec9149f45183295',
        title: 'Hobbit 2',
        authors: ['633171faf4b50ba3b3492c22'],
        genere: '633d56be8ec9149f45183294',
        language: 'hindi',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
        __v: 0,
        isTrending: true,
        imageUrl:
          'http://192.168.1.2:5000/uploads/2022-10-05T07-13-40.986Zhobbit.png',
        updatedAt: '2022-10-05T07:13:41.013Z',
      },
    ],
  },
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
