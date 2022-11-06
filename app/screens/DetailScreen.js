import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import Animated, {
  withTiming,
  withRepeat,
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

// componetns
import {
  AppWrapper,
  AppHeader,
  Loading,
  AppText,
  AppError,
  AppIcon,
  AppButton,
  BookContent,
} from '../components';

// constants
import {appStyles, colors, constants, fonts} from '../utils';

// services
import {
  getBookDetails,
  getBookReviews,
  getBookContents,
} from '../services/Books';
import {printLog} from '../utils/utils';
import {BoldText, RegularText} from '../components/AppText';

const {screenWidth, screenHeight} = constants;
const {MediumText} = AppText;
const {FontAwesomeIcon5} = AppIcon;

const Url = `http://192.168.1.4:5000/uploads/2022-10-05T07-18-31.286Zhobbit.png`;
const width =
  (constants.screenWidth - constants.innerGap * 2) / 2 - constants.innerGap;

const Screen = ({navigation, route}) => {
  const [loading, isLoading] = useState(true);
  const [book, setBook] = useState();
  const [reviews, setReviews] = useState();
  const [contents, setContents] = useState()
  const [tab, setTab] = useState(1);
  const translateX = useSharedValue(100);
  const scale = useSharedValue(1);

  const {bookId} = route.params;

  useEffect(() => {
    fetchBookDetails();
    fetchAllReviews();
    //fetchBookContents();
    scale.value = withRepeat(withSpring(50, {duration: 1000}), 3, true);
  }, []);

  // fetch book details
  const fetchBookDetails = async () => {
    try {
      console.log(bookId);
      let result = await getBookDetails(bookId);
      if (result.status == 200) {
        let source = result.data;
        setBook(source?.data);
        isLoading(false);
        console.log(book);
      } else {
        printLog('Unable to fetch data');
        isLoading(false);
      }
    } catch (e) {
      printLog(e);
      isLoading(false);
    }
  };

  // fetch all reviews
  const fetchAllReviews = async () => {
    try {
      console.log(bookId);
      let result = await getBookReviews(bookId);
      if (result.status == 200) {
        let source = result.data;
        setReviews(source?.data);
        isLoading(false);
        console.log(source);
      } else {
        printLog('Unable to fetch data');
        isLoading(false);
      }
    } catch (e) {
      printLog(e);
      isLoading(false);
    }
  };

  // fetch book contents
  const fetchBookContents = async () => {
    try {
      let result = await getBookContents(bookId);
      if (result.status == 200) {
        let source = result.data;
        setContents(source?.data);
        isLoading(false);
        console.log(source);
      } else {
        printLog('Unable to fetch data');
        isLoading(false);
      }
    } catch (e) {
      printLog(e);
      isLoading(false);
    }
  };

  // handle tab press event
  const handleTabPress = id => {
    setTab(id);
    scale.value = 2;
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  }, []);

  return (
    <AppWrapper
      customStyles={{
        backgroundColor: 'yellow',
        paddingHorizontal: 0,
      }}
      isScroll={false}>
      {isLoading == true ? (
        <Loading />
      ) : (
        <AppWrapper
          customStyles={{
            backgroundColor: 'white',
            overflow: 'hidden',
          }}
          isScroll={true}>
          <View
            style={{
              width: '100%',
              height: screenHeight - 160,
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <AppHeader
                title="Details"
                isRight={false}
                leftPress={() => alert('left press')}
                rightPress={() => alert('right press')}
              />

              <View style={styles.headerSection}>
                <Image
                  source={{uri: book?.imageUrl}}
                  style={[appStyles.bookItem, {width: width}]}
                />

                <View style={styles.bookTitleContainer}>
                  <MediumText style={styles.bookTitle} numberOfLines={3}>
                    {book?.title}
                  </MediumText>
                  <View>
                    <RegularText>by</RegularText>
                    {book?.authors.map((item, index) => {
                      return (
                        <RegularText key={`${index}`}>{item.name}</RegularText>
                      );
                    })}
                  </View>
                </View>
              </View>

              <View
                style={[
                  appStyles.flex_Row,
                  {
                    marginTop: constants.gap,
                    justifyContent: 'space-between',
                  },
                ]}>
                <View style={styles.genreContainer}>
                  <View>
                    <FontAwesomeIcon5 name="book-reader" />
                  </View>
                  <View>
                    <RegularText>GENERE</RegularText>
                    <MediumText style={styles.genreTitle}>
                      {book?.genere.name.toUpperCase()}
                    </MediumText>
                  </View>
                </View>

                <View style={styles.genreContainer}>
                  <View>
                    <BoldText
                      style={{
                        color: colors.primaryPurple,
                      }}>
                      {book?.language.slice(0, 2).toUpperCase()}
                    </BoldText>
                  </View>
                  <View>
                    <RegularText>LANGUAGE</RegularText>
                    <MediumText style={styles.genreTitle}>
                      {book?.language.toUpperCase()}
                    </MediumText>
                  </View>
                </View>
              </View>

              <View
                style={[
                  appStyles.flex_Row,
                  {
                    marginVertical: constants.gap,
                  },
                ]}>
                <Pressable
                  style={styles.tabItem}
                  onPress={() => handleTabPress(1)}>
                  <RegularText
                    style={{
                      color: tab == 1 ? colors.primaryPurple : null,
                    }}>
                    Info
                  </RegularText>
                </Pressable>

                <Pressable
                  style={styles.tabItem}
                  onPress={() => handleTabPress(2)}>
                  <RegularText
                    style={{
                      color: tab == 2 ? colors.primaryPurple : null,
                    }}>
                    Content
                  </RegularText>
                </Pressable>

                <Pressable
                  style={styles.tabItem}
                  onPress={() => handleTabPress(3)}>
                  <RegularText
                    style={{
                      color: tab == 3 ? colors.primaryPurple : null,
                    }}>
                    Reviews
                  </RegularText>
                </Pressable>
              </View>

              <View>
                {tab == 1 ? (
                  <RegularText>{book?.description}</RegularText>
                ) : tab == 2 ? (
                  <BookContent
                    data={book.content}
                  />
                ) : (
                  <RegularText>Review section</RegularText>
                )}
              </View>
            </ScrollView>
          </View>
        </AppWrapper>
      )}

      <View
        style={{
          width: '100%',
          position: 'absolute',
          left: 0,
          bottom: 0,
          marginTop: constants.gap * 2,
          paddingHorizontal: constants.innerGap,
        }}>
        <View
          style={[
            appStyles.flex_Row,
            {justifyContent: 'space-between', alignItems: 'center'},
          ]}>
          <BoldText
            style={{
              fontSize: fonts.extraLarge * 1.5,
              color: colors.primaryBlack,
            }}>
            $65.00
          </BoldText>

          <AppButton
            customStyle={{
              width: '50%',
              borderRadius: 100,
            }}
            name="Add to cart"
          />
        </View>
      </View>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookTitleContainer: {
    width: width,
  },
  bookTitle: {
    color: colors.primaryBlack,
    alignSelf: 'center',
  },
  genreContainer: {
    width,
    borderWidth: 1,
    borderRadius: constants.buttonRadius * 2,
    borderColor: colors.primaryGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  genreTitle: {
    color: colors.primaryBlack,
    fontSize: fonts.large,
  },
  tabItem: {
    flex: 1,
  },
});

export default Screen;
