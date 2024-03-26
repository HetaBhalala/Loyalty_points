import {Dimensions, StyleSheet, Text, View, Platform, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {font, spacing} from '../utils/styles';
import {colors} from '../utils/color';
import LinearGradient from 'react-native-linear-gradient';
import {cardSwiperData} from '../utils/cardSwiperData';
import DropShadow from 'react-native-drop-shadow';

const width = Dimensions.get('window').width - 10;

const CardSwiper = ({setData}) => {
  const scrollViewRef = useRef(null);
  const cards = cardSwiperData;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSnapToItem = index => {
    setData(cards[index].type);
    setCurrentIndex(index);
  };
  const handlePress = (index) => {
    scrollViewRef.current.snapToItem(index); // Scroll to the specified item
  };
  const renderItem = ({item, index}) => {
    return (
      <DropShadow style={styles.shadow}>
        <TouchableOpacity style={styles.singleCard} onPress={()=>handlePress(index)}>
          <LinearGradient
            colors={[item.color3, item.color4]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.item}>
            <View style={styles.cardHeader}>
              <Text style={styles.nameTxt}>
                {item.first_name} {item.last_name}
              </Text>
              <View style={styles.cardInnerContainer}>
                <Text style={[styles.cardTxt, {color: item.textColor}]}>
                  {item.type.toUpperCase()}
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.smallTxt}>CARD NUMBER</Text>
              <Text style={styles.cardNumberTxt}>{item.card_number}</Text>
            </View>
            <View>
              <View style={styles.availableView}>
                <Text style={styles.smallTxt}>Points Available</Text>
                <Text style={styles.smallTxt}>Expires</Text>
              </View>
              <View style={styles.availableView}>
                <Text style={styles.pointTxt}>{item.points} pts</Text>
                <Text style={styles.valTxt}>{item.validity}</Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </DropShadow>
    );
  };
  return (
    <View>
      <Text style={styles.headerTxt}>Your Cards</Text>
      <Carousel
        ref={scrollViewRef}
        sliderWidth={width}
        itemHeight={350}
        itemWidth={width - 100}
        data={cards}
        renderItem={renderItem}
        firstItem={0}
        activeSlideAlignment="start"
        onSnapToItem={index => setCurrentIndex(index)}
        onBeforeSnapToItem={handleSnapToItem}
        inactiveSlideOpacity={0.2}
        containerCustomStyle={{paddingLeft: 20}}
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
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    padding: 5,
  },
  item: {
    flex: 1,
    padding: spacing.base,
    justifyContent: 'space-between',
    borderRadius: 13,
  },
  singleCard: {
    width: width - 100,
    height: 160,
    borderRadius: 13,
  },
  headerTxt: {
    fontSize: font.size.lg,
    color: colors.bookTxt,
    paddingHorizontal: spacing.md,
    fontFamily: font.family.poppins600,
  },
  nameTxt: {
    fontSize: font.size.base,
    color: colors.black,
    fontFamily: font.family.sans700,
    letterSpacing: 1,
  },
  cardNumberTxt: {
    fontSize: font.size.semi,
    color: colors.blackTxt,
    fontFamily: font.family.sans500,
    letterSpacing: 1.52,
  },
  pointTxt: {
    fontSize: font.size.mini,
    color: colors.black39,
    fontFamily: font.family.sans500,
  },
  cardTxt: {
    fontSize: font.size.mini,
    color: colors.black,
    fontFamily: font.family.poppins400,
  },
  valTxt: {
    fontSize: font.size.mini,
    color: colors.black39,
    fontFamily: font.family.sans400,
  },
  availableView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInnerContainer: {
    padding: spacing.mini,
    borderRadius: 4,
  },
  smallTxt: {
    fontSize: 8,
    color: colors.darkGreyTxt,
    fontFamily: font.family.sans400,
    paddingBottom: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
