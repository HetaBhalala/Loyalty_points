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

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false ,
          tabBarStyle: styles.tabStyle, // Set background color here
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            
            tabBarLabel: () => null,
            tabBarIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name="home"
                color={focused ? colors.black : colors.grey}
                size={28}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name="wallet"
                color={focused ? colors.black : colors.grey}
                size={28}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name="email"
                color={focused ? colors.black : colors.grey}
                size={28}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name="face-woman-profile"
                color={focused ? colors.black : colors.grey}
                size={28}
              />
            ),
          }}
        />
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
