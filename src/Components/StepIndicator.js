import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/color';
import {spacing} from '../utils/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const circleSize = 20;
const StepIndicator = ({current, steps}) => {
  const Circle = () => {
    return (
      <View style={styles.circle}>
        <MaterialCommunityIcons
          name="check"
          size={18}
          color={colors.black}
        />
      </View>
    );
  };
  const EmptyCircle = () => {
    return <View style={styles.emptyCircle} />;
  };
  const HalfCircle = () => {
    return (
      <View style={styles.circleBorder}>
        <View style={styles.innerCircle} />
      </View>
    );
  };
  const Seperator = () => {
    return (
      <View style={styles.seperatorContainer}>
        <View style={styles.seperator} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {steps.map((item, index) => {
        if (index < current) {
          return (
            <>
              <Circle />
              <Seperator />
            </>
          );
        } else if (index == current) {
          if (index != steps.length - 1) {
            return (
              <>
                <HalfCircle />
                <Seperator />
              </>
            );
          } else {
            return <HalfCircle />;
          }
        } else {
          if (index != steps.length - 1) {
            return (
              <>
                <EmptyCircle />
                <Seperator />
              </>
            );
          } else {
            return <EmptyCircle />;
          }
        }
      })}
    </View>
  );
};

export default StepIndicator;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: spacing.semiXXL,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop:spacing.base
  },
  emptyCircle: {
    height: circleSize,
    width: circleSize,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: colors.white,
  },
  circle: {
    height: circleSize,
    width: circleSize,
    backgroundColor: colors.white,
    borderRadius: 100,
    alignItems:'center',
    justifyContent:'center'
  },
  circleBorder: {
    height: circleSize,
    width: circleSize,
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
  },
  innerCircle: {
    height: circleSize / 2,
    width: circleSize / 2,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: colors.white,
  },
  seperatorContainer: {width: circleSize, alignItems: 'center'},
  seperator: {
    width: 60,
    height: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
  },
});
