import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {dimensions, font, spacing} from '../utils/styles';
import {colors} from '../utils/color';
import {cards} from '../utils/cards';

const CreditJournry = () => {
  const data = cards;
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.imageContainer}>
        <View style={styles.moreView}>
          {index == 1 ? (
            <Text style={styles.moreTxt} numberOfLines={1}>Need 200 more</Text>
          ) : index == 2 ? (
            <Text style={styles.moreTxt} numberOfLines={1}>Need 300 more</Text>
          ) : (
            <Text style={styles.moreTxt}> </Text>
          )}
        </View>
        <Image source={item.source} resizeMode="contain" style={styles.image} />
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.headerTxt}>Your Points Journey</Text>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listStyls}
      />
    </View>
  );
};

export default CreditJournry;

const styles = StyleSheet.create({
  headerTxt: {
    fontSize: font.size.lg,
    color: colors.bookTxt,
    paddingHorizontal: spacing.md,
    fontFamily: font.family.poppins600,
  },
  parentStyle: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginHorizontal: 15,
  },
  image: {
    height: 65,
    width: 65,
  },
  listStyls: {
    width: dimensions.fullWidth,
    justifyContent: 'center',
  },
  moreTxt: {
    textAlign: 'center',
    fontSize: 8,
    fontFamily: font.family.poppins400,
  },
  moreView:{
  }
});
