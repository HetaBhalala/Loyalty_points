import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Wallet from '../Screens/Wallet';
import Message from '../Screens/Message';
import {colors} from '../utils/color';
import CustomBottomTab from '../Components/CustomBottomTab';
import Ranking from '../Screens/Ranking';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
       initialRouteName="Wallet"
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabStyle, // Set background color here
        }}
        tabBar={(props: any) => <CustomBottomTab {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Ranking" component={Ranking} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Message" component={Message} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: colors.white,
    borderTopWidth: 2,
  },
});
