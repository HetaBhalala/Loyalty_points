import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {font, spacing} from '../utils/styles';
import {colors} from '../utils/color';
import {benefits} from '../utils/benefits';
import DropShadow from 'react-native-drop-shadow';

const Benefits = ({data}) => {
  const [benefit, setBenefits] = useState(benefits[data]);

  useEffect(() => {
    setBenefits(benefits[data]);
  }, [data]);

  const renderItem = ({item}) => {
    return (
      <DropShadow  style={styles.shadow}>
        <TouchableOpacity style={styles.cardView}>
          <View style={styles.cardTopView}>
            <View style={styles.topTextView}>
              <Text style={styles.benefitTxt}>{item?.benefit_name}</Text>
              <Text style={styles.descTxt}>{item?.description}</Text>
            </View>
            <View style={styles.offView}>
              <View style={styles.gradientView}>
                <Text style={styles.offTxt}>{item.discount_percentage}%</Text>
                <Text style={styles.offTxt}>OFF</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardBottomView}>
            <View>
              <Text style={styles.subDesc}>{item.subDescription}</Text>
            </View>
            <View style={styles.bookView}>
              <Text style={styles.subDesc}>Book</Text>
            </View>
          </View>
        </TouchableOpacity>
      </DropShadow>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.benefitHeaderTxt}>Benefits</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={benefit}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 60}}
      />
    </View>
  );
};

export default Benefits;

const styles = StyleSheet.create({
  container: {},
  cardTopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topTextView: {
    padding: spacing.base,
    width: 260,
  },
  offView: {
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: spacing.base,
  },
  cardView: {
    marginBottom: spacing.base,
    paddingHorizontal: spacing.base,
    backgroundColor: colors.white,
    borderRadius: 10,
  },

  cardBottomView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: spacing.base,
  },
  bookView: {
    padding: spacing.nano,
    paddingHorizontal: spacing.small,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.peacock,
  },
  benefitTxt: {
    fontFamily: font.family.poppins600,
    fontSize: font.size.semiMd,
    color: colors.bookTxt,
  },
  benefitHeaderTxt: {
    fontFamily: font.family.poppins600,
    fontSize: font.size.semiXl,
    color: colors.bookTxt,
  },
  descTxt: {
    fontSize: font.size.base,
    color: colors.black,
    fontFamily: font.family.poppins400,
  },
  subDesc: {
    fontSize: font.size.base,
    color: colors.bookTxt,
    fontFamily: font.family.poppins600,
  },
  offTxt: {
    fontFamily: font.family.poppins600,
    fontSize: font.size.nano,
    color: colors.bookTxt,
    paddingHorizontal: 5,
  },

  gradientView: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    backgroundColor: colors.background_blue,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    padding: 5,
    overflow:'hidden'
  },
});
