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
import {spacing} from '../utils/styles';
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
          <Image source={imagePath.DRAWER} style={styles.drawer} />
          <Image source={imagePath.PROFILE} style={styles.profile} />
        </View>
        <View>
          <CreditJournry />
          <StepIndicator
            circleSize={'10'}
            seperatorHeight={5}
            current={
              data == 'Bronz'
                ? 0
                : data == 'Silver'
                ? 1
                : data == 'Gold'
                ? 2
                : data == 'Platinum'
                ? 3
                : 0
            }
            steps={[1, 2, 3, 4]}
          />
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
    borderRadius: 100,
    margin: spacing.base,
  },
  drawer: {
    height: 20,
    width: 20,
    margin: spacing.base,
    tintColor:colors.white
  },
  benefitsView: {
    flex: 0.35,
    padding: spacing.base,
    backgroundColor: colors.background_light,
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
});
