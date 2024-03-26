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
import {imagePath} from '../utils/imagePath';
import Benefits from '../Components/Benefits';
import {dimensions, font, spacing} from '../utils/styles';
import {colors} from '../utils/color';
import CardSwiper from '../Components/CardSwiper';
import CreditJournry from '../Components/CreditJournry';
import StepIndicator from '../Components/StepIndicator';

const Wallet = () => {
  const [data, setData] = useState('Silver');

  return (
    <View style={{flex: 1}}>
      <View style={styles.blueContainer}>
        <View style={styles.header}>
          <View style={styles.drawerView}>
            <Image source={imagePath.DRAWER} style={styles.drawer} />
          </View>
          <View>
            <Text style={styles.cardTxt}>Cards</Text>
          </View>
          <View>
            <Image source={imagePath.PROFILE} style={styles.profile} />
          </View>
        </View>
        <View style={{height: '85%'}}>
          <View style={{height: '40%'}}>
            <View style={{height:'70%',backgroundColor:'red'}}>
              <CreditJournry />
            </View>
            <View style={styles.stepView}>
              <StepIndicator
                circleSize={'10'}
                seperatorHeight={5}
                current={
                  data == 'Silver'
                    ? 0
                    : data == 'Gold'
                    ? 1
                    : data == 'Platinum'
                    ? 2
                    : 0
                }
                steps={[1, 2, 3]}
              />
            </View>
          </View>
          <View style={styles.cardSwiper}>
            <CardSwiper setData={setData} />
          </View>
        </View>
      </View>
      <View style={styles.benefitsView}>
        <View style={styles.benefitCurve}>
          <Benefits data={data} />
        </View>
      </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  blueContainer: {
    backgroundColor: colors.background_blue,
    flex: 0.65,
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 10,
    margin: spacing.base,
  },
  drawerView: {
    backgroundColor: colors.white,
    height: 38,
    width: 38,
    margin: spacing.base,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  drawer: {
    height: 25,
    width: 25,
    // tintColor: colors.white,
  },
  benefitsView: {
    flex: 0.35,
    backgroundColor: colors.background_blue,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  stepView: {
    width: 285,
    alignSelf: 'center',
    height:'30%',
    backgroundColor:'pink'
  },
  cardTxt: {
    fontFamily: font.family.raleway600, // Use the actual font family name
    color: colors.black,
    fontSize: font.size.lg,
  },
  benefitCurve: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: spacing.base,
    backgroundColor: colors.white,
  },
  cardSwiper:{height: '60%',justifyContent:'flex-end',paddingBottom:spacing.base}
});
