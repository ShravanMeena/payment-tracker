import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

import {RootScreens} from '../constants/NavigationConstants';
import {SPIconName, SPConstants} from '../constants/SPConstants';

import MainStackNavigator from './MainStackNavigator';

import {theme} from '../core/theme';
import DrawerScreen from '../components/DrawerScreen';
import {SPColors} from '../theme/SPTheme';
import QrCodeScannerScreen from '../pages/payment/QrCodeScannerScreen';
import History from '../pages/payment/History';
import Explore from '../pages/explore/Explore';
import FinancePro from '../pages/pro/FinancePro';
import PaymentScreen from '../pages/payment/PaymentScreen';

const Drawer = createDrawerNavigator();

const CoreNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="QrCodeScannerScreen"
      drawerContent={props => <DrawerScreen {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: theme.colors.primary,
        drawerActiveTintColor: SPColors.white,
        drawerInactiveTintColor: SPColors.grey,
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}>
      {/* <Drawer.Screen
        name={RootScreens.Main}
        component={MainStackNavigator}
        options={{
          title: SPConstants.homeDrawerTitle,
          headerShown: false,
          drawerIcon: ({color}) => (
            <Ionicons name={SPIconName.home} size={22} color={color} />
          ),
        }}
      /> */}
      {/* <Drawer.Screen
        name="QrCodeScannerScreen"
        component={QrCodeScannerScreen}
        options={{
          title: SPConstants.profileDrawerTitle,
          drawerIcon: ({color}) => (
            <Ionicons name={SPIconName.person} size={22} color={color} />
          ),
        }}
      /> */}
        <Drawer.Screen name="PaymentScreen" component={PaymentScreen} />

      <Drawer.Screen
        name={'QrCodeScannerScreen'}
        component={QrCodeScannerScreen}
        options={{
          title: SPConstants.homeDrawerTitle,
          headerShown: false,
          drawerIcon: ({color}) => (
            <Ionicons name="qrcode-scan" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="History"
        component={History}
        options={{
          title: SPConstants.homeDrawerTitle,
          headerShown: false,
          drawerIcon: ({color}) => (
            <Ionicons name="ios-list" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={'Explore'}
        component={Explore}
        options={{
          title: SPConstants.homeDrawerTitle,
          headerShown: false,
          drawerIcon: ({color}) => (
            <Ionicons name="ios-albums-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={'FinancePro'}
        component={FinancePro}
        options={{
          title: SPConstants.homeDrawerTitle,
          headerShown: false,
          drawerIcon: ({color}) => (
            <Ionicons name="ios-albums-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default CoreNavigation;
