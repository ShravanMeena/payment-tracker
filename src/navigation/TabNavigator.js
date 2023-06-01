import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {TabScreens} from '../constants/NavigationConstants';
import {SPIconName} from '../constants/SPConstants';
import Home from '../pages/home/Home';
import GameTypes from '../pages/gameTypes/GameTypes';
import Wallet from '../pages/payment/Wallet';
import {theme} from '../core/theme';
import Profile from '../pages/profile/Profile';
import {COLORS} from '../theme';
import QrCodeScannerScreen from '../pages/payment/QrCodeScannerScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import History from '../pages/payment/History';
import Explore from '../pages/explore/Explore';

const Tab = createBottomTabNavigator();

let tabBarStyle = {
  backgroundColor: COLORS.primary,
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle,
        tabBarInactiveTintColor: COLORS.white,
        tabBarActiveTintColor: COLORS.yellow,
      }}>
      <Tab.Screen
        name={'QrCodeScannerScreen'}
        component={QrCodeScannerScreen}
        options={() => ({
          tabBarStyle,
          tabBarIcon: ({color, size}) => (
            <Icon name={'qrcode-scan'} color={color} size={32} />
          ),
        })}
      />

      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarStyle,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-list" color={color} size={32} />
          ),
        }}
      />

      <Tab.Screen
        name={'Explore'}
        component={Explore}
        options={{
          tabBarStyle,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-albums-outline" color={color} size={32} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
