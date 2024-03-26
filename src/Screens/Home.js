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

const Home = () => {
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
        <View>
          <CreditJournry />
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
          <CardSwiper setData={setData} />
        </View>
      </View>
      <View style={styles.benefitsView}>
        <Benefits data={data} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  blueContainer: {
    backgroundColor: colors.background_blue,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    padding: spacing.base,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stepView: {
    width: 285,
    alignSelf: 'center',
  },
  cardTxt:{
    fontFamily: font.family.raleway600, // Use the actual font family name
    color:colors.black,
    fontSize:font.size.lg
  }
});
