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
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {font, spacing} from '../utils/styles';
import {colors} from '../utils/color';

const Benefits = ({data}) => {
  const benefits = {
    Silver: [
      {
        id: 1,
        benefit_name: 'Blood Test',
        description: 'Check up for 1 family member',
        subDescription: 'Earn 200 more points',
        discount_percentage: 70,
        credit_points: 20,
        validity: '31-12-2024',
      },
    ],
    Gold: [
      {
        id: 2,
        benefit_name: 'Blood Test',
        description: 'Check up for 2 family member',
        discount_percentage: 80,
        credit_points: 40,
        validity: '31-12-2024',
        subDescription: 'Earn 300 more points',
      },
    ],
    Platinum: [
      {
        id: 3,
        benefit_name: 'Blood Test',
        description: 'Check up for 4 family member',
        discount_percentage: 100,
        credit_points: 60,
        validity: '31-12-2024',
        subDescription: 'Earn 400 more points',
      },
    ],
    Bronz: [
      {
        id: 1,
        benefit_name: 'Blood Test',
        description: 'Check up for 1 family member',
        subDescription: 'Earn 100 more points',
        discount_percentage: 60,
        credit_points: 10,
        validity: '31-12-2024',
      },
    ],
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.cardView}>
        <View style={styles.cardTopView}>
          <View style={styles.topTextView}>
            <Text style={styles.benefitTxt}>{item?.benefit_name}</Text>
            <Text style={styles.descTxt}>{item?.description}</Text>
          </View>
          <View style={styles.offView}>
            <LinearGradient
              colors={['#dcdce1', '#c2d2e0']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.gradientView}>
              <Text style={styles.offTxt}>{item.discount_percentage}%</Text>
              <Text style={styles.offTxt}>OFF</Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.cardBottomView}>
          <View>
            <Text style={styles.subDesc}>{item.subDescription}</Text>
          </View>
          <View style={styles.bookView}>
            <Text style={styles.bookTxt}>Book</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Text style={styles.benefitHeaderTxt}>Benefits</Text>
      <FlatList data={benefits[data]} renderItem={renderItem}         keyExtractor={item => item.id}
 />
    </View>
  );
};

export default Benefits;

const styles = StyleSheet.create({
  cardTopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topTextView: {
    padding: spacing.base,
  },
  offView: {
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: spacing.base,
  },
  cardView: {
    marginVertical: spacing.base,
    paddingHorizontal: spacing.base,
    borderRadius: 12,
    backgroundColor: colors.white,
    borderRadius: 10,
    // Apply shadow properties based on platform
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  cardBottomView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: spacing.base,
  },
  bookView: {
    padding: spacing.nano,
    paddingHorizontal: spacing.mini,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.background_blue,
  },
  benefitTxt: {
    fontWeight: 'bold',
    fontSize: font.size.lg,
    color: colors.black,
  },
  benefitHeaderTxt: {
    fontWeight: 'bold',
    fontSize: font.size.semiLg,
    color: colors.background_blue,
  },
  descTxt: {
    fontSize: font.size.base,
    color: colors.black,
    opacity: 0.6,
  },
  subDesc: {
    fontSize: font.size.base,
    color: colors.black,
    opacity: 0.8,
    fontWeight: '600',
  },
  offTxt: {
    fontWeight: 'bold',
    fontSize: font.size.mini,
    color: colors.black,
  },
  bookTxt: {
    fontSize: font.size.base,
    color: colors.background_blue,
    fontWeight: '600',
  },
  gradientView:{
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  }
});
