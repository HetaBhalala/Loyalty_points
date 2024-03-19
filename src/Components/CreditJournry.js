import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {font, spacing} from '../utils/styles';
import {colors} from '../utils/color';

const CreditJournry = () => {
  const data = [
    {
      text: 'Bronze',
      color1: colors.bronz_dark,
      color2: colors.bronz_light,
      borderColor: colors.bronz_border,
      textColor:colors.bronz_txt ,
    },
    {
      text: 'Silver',
      color1: colors.silver_dark,
      color2: colors.silver_light,
      borderColor: colors.silver_border,
      textColor:colors.silver_txt,
    },
    {
      text: 'Gold',
      color1: colors.gold_dark,
      color2: colors.gold_light,
      borderColor: colors.gold_border,
      textColor: colors.gold_txt,
    },
    {
      text: 'Platinum',
      color1: colors.platinum_dark  ,
      color2: colors.platinum_light,
      borderColor: colors.platinum_border ,
      textColor: colors.platinum_txt,
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.imageContainer(item.borderColor)}>
        <LinearGradient
          colors={[item.color1, item.color2]}
          style={styles.parentStyle}>
          <Text style={styles.textStyle(item.textColor)}>{item.text}</Text>
        </LinearGradient>
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.headerTxt}>Your Credit Journey</Text>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
};

export default CreditJournry;

const styles = StyleSheet.create({
  headerTxt: {
    fontSize: font.size.lg,
    color: colors.white,
    fontWeight: 'bold',
    paddingHorizontal: spacing.md,
    paddingBottom:spacing.base
  },
  parentStyle: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: borderColor => ({
    width: Dimensions.get('window').width / 4 - 30,
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: borderColor,
    borderWidth: 3,
    marginHorizontal: 15,
  }),

  textStyle: textColor => ({
    color: textColor,
    fontSize: 15,
    fontWeight: 'bold',
  }),
});
