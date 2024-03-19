import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {font, spacing} from '../utils/styles';
import {colors} from '../utils/color';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('window').width - 10;

const CardSwiper = ({setData}) => {
  const scrollViewRef = useRef(null);
  const cards = [
    {
      type: 'Bronz',
      user_id: 123123,
      first_name: 'Arthur',
      last_name: 'Richards',
      card_number: 3256325632,
      points: 120,
      validity: '7/25',
      color1: colors.peach_dark,
      color2: colors.peach_light,
      color3: '#C9C9C9',
      color4: '#F5F5F5',
      textColor: '#9A9897',
      color3: colors.bronz_dark,
      color4: colors.bronz_light,
      textColor: colors.bronz_txt,
    },
    {
      type: 'Silver',
      user_id: 123123,
      first_name: 'Archie',
      last_name: 'Richards',
      card_number: 9874589654,
      points: 120,
      validity: '11/25',
      color1: colors.green_dark,
      color2: colors.green_light,
      color3: colors.silver_dark,
      color4: colors.silver_light,
      textColor: colors.silver_txt,
    },
    {
      type: 'Gold',
      user_id: 123123,
      first_name: 'Ronald',
      last_name: 'Richards',
      card_number: 3434324234,
      points: 120,
      validity: '12/24',
      color1: colors.peach_dark,
      color2: colors.peach_light,
      color3: colors.gold_dark,
      color4: colors.gold_light,
      textColor: colors.gold_txt,
    },
    {
      type: 'Platinum',
      user_id: 123123,
      first_name: 'Harry',
      last_name: 'Richards',
      card_number: 6523654125,
      points: 120,
      validity: '6/24',
      color1: colors.green_dark,
      color2: colors.green_light,
      color3: colors.platinum_dark,
      color4: colors.peach_light,
      textColor: colors.platinum_txt,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSnapToItem = index => {
    console.log('index', cards[index].type);
    setData(cards[index].type);
    setCurrentIndex(index);
  };
  const renderItem = ({item, index}) => {
    return (
      <LinearGradient
        colors={[item.color1, item.color2]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.item}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.nameTxt}>{item.first_name}</Text>
          <LinearGradient
            colors={[item.color3, item.color4]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.cardInnerContainer}>
            <Text style={{color: item.textColor}}>{item.type}</Text>
          </LinearGradient>
        </View>
        <View>
          <Text style={styles.cardNumberTxt}>{item.card_number}</Text>
        </View>
        <View>
          <Text style={styles.pointTxt}>{item.points} pts</Text>
          <View style={styles.availableView}>
            <Text style={styles.valTxt}>Available</Text>
            <Text style={styles.valTxt}>Valid: {item.validity}</Text>
          </View>
        </View>
      </LinearGradient>
    );
  };
  return (
    <View>
      <Text style={styles.headerTxt}>Your Cards</Text>
      <Carousel
        ref={scrollViewRef}
        sliderWidth={width}
        // sliderHeight={width}
        itemWidth={width - 100}
        data={cards}
        renderItem={renderItem}
        firstItem={0}
        activeSlideAlignment="start"
        onSnapToItem={index => setCurrentIndex(index)}
        onBeforeSnapToItem={handleSnapToItem}
        inactiveSlideOpacity={0.5}
        containerCustomStyle={{paddingLeft: 20, marginTop: 15}}
      />
    </View>
  );
};

export default CardSwiper;

const styles = StyleSheet.create({
  sliderWrapper: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: width - 100,
    height: 160,
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: spacing.base,
    justifyContent: 'space-between',
  },
  headerTxt: {
    fontSize: font.size.lg,
    color: colors.white,
    fontWeight: 'bold',
    paddingHorizontal: spacing.md,
    paddingTop:spacing.exMd
  },
  nameTxt: {
    fontSize: font.size.lg,
    color: colors.black,
    fontWeight: 'bold',
  },
  cardNumberTxt: {
    fontSize: font.size.md,
    color: colors.black,
    fontWeight: '500',
  },
  pointTxt: {
    fontSize: font.size.md,
    color: colors.black,
    fontWeight: 'bold',
  },
  valTxt: {
    fontSize: font.size.base,
    color: colors.greyTxt,
  },
  availableView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInnerContainer: {
    padding: spacing.mini,
    borderRadius: 4,
  },
});
