import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {imagePath} from '../utils/imagePath';
import {colors} from '../utils/color';
import DropShadow from 'react-native-drop-shadow';

const CustomBottomTab = ({state, descriptors, navigation}) => {
  const onPress = (route, isFocused) => {
    if (!isFocused) {
      navigation.navigate(route.name);
    }
  };
  return (
    <DropShadow
      style={styles.shadow}>
      <View style={styles.tabContainer}>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              onPress(state.routes[0], state.index === 0);
            }}>
            <Image style={styles.img} source={imagePath.HOME} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              onPress(state.routes[1], state.index === 1);
            }}>
            <Image style={styles.img} source={imagePath.RANKING} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, styles.middleTab]}
            onPress={() => {
              onPress(state.routes[2], state.index === 2);
            }}>
            <Image style={styles.img} source={imagePath.CREDIT} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              onPress(state.routes[3], state.index === 3);
            }}>
            <Image style={styles.img} source={imagePath.BELL} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              onPress(state.routes[4], state.index === 4);
            }}>
            <Image style={styles.img} source={imagePath.USER} />
          </TouchableOpacity>
        </View>
      </View>
    </DropShadow>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    height: 25,
    width: '100%',
    marginBottom: 16,
    marginTop: 6,
    flexDirection: 'row',
  },
  img: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  tab: {
    height: 44,
    width: 44,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleTab: {
    backgroundColor: colors.peacock,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 2,
    position: 'absolute',
    top: -30,
    left: '45%',
  },
  shadow:{
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  }
});

export default CustomBottomTab;
