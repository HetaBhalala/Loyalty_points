import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet,Platform} from 'react-native';
import {imagePath} from '../utils/imagePath';
import {colors} from '../utils/color';
import {dimensions, spacing} from '../utils/styles';

const CustomBottomTab = ({navigation, state}) => {
  const onPress = (route, isFocused) => {
    if (!isFocused) {
      navigation.navigate(route.name);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            onPress(state.routes[0], state.index === 0);
          }}>
          <Image
            style={styles.img}
            source={imagePath.HOME}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            onPress(state.routes[1], state.index === 1);
          }}>
          <Image style={styles.img} source={imagePath.RANKING} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab,styles.middleTab]}
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
          <Image
            style={styles.img}
            source={imagePath.BELL}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            onPress(state.routes[4], state.index === 4);
          }}>
          <Image
            style={styles.img}
            source={imagePath.USER}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomBottomTab;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth:1,
    borderTopColor:colors.peacock,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    height: 25,
    width: '90%',
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
    width:  44,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleTab:{
    backgroundColor:colors.peacock,
    alignItems:'center',
    justifyContent:'center',
    bottom:2,
    position:'absolute',
    top:-30,
    left:'45%'
  }
});
