import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const [data, setData] = useState('silver');
  const benefits = {
    silver: [
      {
        id: 1,
        benefit_name: 'Blood Test',
        description: 'Check up for 1 family member',
        subDescription: 'Earn 200 more points',
        discount_percentage: 100,
        credit_points: 20,
        validity: '31-12-2024',
      },
    ],
    gold: [
      {
        id: 2,
        benefit_name: 'Blood Test',
        description: 'Check up for 1 family member',
        discount_percentage: 100,
        credit_points: 20,
        validity: '31-12-2024',
        subDescription: 'Earn 300 more points',
      },
    ],
    platinum: [
      {
        id: 3,
        benefit_name: 'Blood Test',
        description: 'Check up for 1 family member',
        discount_percentage: 100,
        credit_points: 20,
        validity: '31-12-2024',
        subDescription: 'Earn 400 more points',
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
              style={{
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 4,
              }}>
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
    <View style={{flex: 1}}>
      <View style={styles.blueContainer}>
        <View style={styles.profile}>
          <Text>P</Text>
        </View>
      </View>
      <View style={styles.benefitsView}>
        <Text style={styles.benefitHeaderTxt}>Benefits</Text>
        <FlatList data={benefits[data]} renderItem={renderItem} />
      </View>
      <View style={styles.pentagon}>
        <View style={styles.pentagonInner}>
          
        </View>
        <View style={styles.pentagonBefore}>
          <Text>hell</Text>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  pentagon: {
    backgroundColor: 'pink',
    height:140
  },
  pentagonInner: {
    width: 90,
    borderBottomColor: 'red',
    borderBottomWidth: 0,
    borderLeftColor: 'transparent',
    borderLeftWidth: 18,
    borderRightColor: 'transparent',
    borderRightWidth: 18,
    borderTopColor: 'red',
    borderBottomWidth: 50,
  },
  pentagonBefore: {
    position: 'absolute',
    height: 0,
    width: 0,
    top: 35,
    left: 0,
    borderStyle: 'solid',
    borderBottomColor: 'green',
    borderBottomWidth: 35,
    borderLeftColor: 'transparent',
    borderLeftWidth: 45,
    borderRightColor: 'transparent',
    borderRightWidth: 45,
    borderTopWidth: 0,
    borderTopColor: 'transparent',
  },
  blueContainer: {
    backgroundColor: 'blue',
    // height: 400,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 0.6,
  },
  profile: {
    height: 40,
    width: 40,
    backgroundColor: 'red',
    borderRadius: 100,
    margin: 12,
  },
  cardView: {
    marginVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    // Apply shadow properties based on platform
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  benefitsView: {
    flex: 0.4,
    padding: 12,
    backgroundColor: '#E8E8E8',
  },
  cardTopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topTextView: {
    padding: 12,
  },
  offView: {
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: 12,
  },
  cardBottomView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 12,
  },
  bookView: {
    padding: 4,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'blue',
  },
  benefitTxt: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  benefitHeaderTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  descTxt: {
    fontSize: 14,
    color: 'black',
    opacity: 0.6,
  },
  subDesc: {
    fontSize: 14,
    color: 'black',
    opacity: 0.8,
    fontWeight: '600',
  },
  offTxt: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'black',
  },
  bookTxt: {
    fontSize: 14,
    color: 'blue',
    fontWeight: '600',
  },
});
