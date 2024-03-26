import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/color';
import {spacing} from '../utils/styles';

const circleSize = 20;
const StepIndicator = ({current, steps}) => {

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
  const Seperator = ({opacity}) => {
    return (
      <View style={styles.seperatorContainer}>
        <View style={styles.seperator(opacity)} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {steps.map((item, index) => {
        if (index < current) {
          return (
            <>
              <HalfCircle key={index}/>
              <Seperator opacity={0.49} />
            </>
          );
        } else if (index == current) {
          if (index != steps.length - 1) {
            return (
              <>
                <HalfCircle  key={index}/>
                <Seperator opacity={0.49} />
              </>
            );
          } else {
            return <HalfCircle  key={index}/>;
          }
        } else {
          if (index != steps.length - 1) {
            return (
              <>
                <EmptyCircle  key={index}/>
                <Seperator opacity={0.49} />
              </>
            );
          } else {
            return <EmptyCircle  key={index}/>;
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
    paddingTop: spacing.base,
  },
  emptyCircle: {
    height: circleSize,
    width: circleSize,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: colors.peacock,
    opacity: 0.49,
  },

  circleBorder: {
    height: circleSize,
    width: circleSize,
    borderWidth: 2,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.peacock,
  },
  innerCircle: {
    height: circleSize / 2,
    width: circleSize / 2,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: colors.peacock,
    backgroundColor: colors.peacock,
  },
  seperatorContainer: {width: circleSize, alignItems: 'center'},
  seperator: opacity => ({
    width: 60,
    height: 1,
    flexDirection: 'column',
    backgroundColor: colors.peacock,
    opacity: opacity,
  }),
});
