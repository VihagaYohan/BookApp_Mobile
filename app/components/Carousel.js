import React, {Component, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  Animated,
} from 'react-native';

// constants
import {constants, colors} from '../utils';

const {screenWidth, screenHeight} = constants;



const Carousel = ({data}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const RenderItem = ({item, index}) => {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/image_1.png')}
          style={styles.image}
        />
      </View>
    );
  };

  return (
    <>
      <Animated.FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        scrollEnabled
        decelerationRate={'fast'}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => <RenderItem item={item} index={index} />}
     /*    onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {x: scrollX},
              },
            },
          ],
          {useNativeDriver: true},
        )} */
      />

     {/*  <View style={styles.dotView}>
        {data.map((_, index) => {
          const inputRange = [
            (index - 1) *screenWidth,
            index * screenWidth,
            (index + 1) * screenWidth,
          ];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`${index}`}
              style={[
                styles.dot,
                {
                opacity:dotWidth
                },
              ]}></Animated.View>
          );
        })}
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth - constants.innerGap * 2,
    height: 200,
    borderWidth: 1,
    borderRadius: constants.buttonRadius * 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dotView: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: constants.innerGap,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 4,
    marginRight: 10,
    backgroundColor: colors.primaryPurple,
  },
});

export default Carousel;
