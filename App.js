import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {ResetPasswordScreen} from './src/pages/auth';
import {createStackNavigator} from '@react-navigation/stack';
import PaymentScreen from './src/pages/payment/PaymentScreen';
import QrCodeScannerScreen from './src/pages/payment/QrCodeScannerScreen';
import CoreNavigation from './src/navigation/CoreNavigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <CoreNavigation />
      {/* <Stack.Navigator
        initialRouteName="QrCodeScannerScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="QrCodeScannerScreen"
          component={QrCodeScannerScreen}
        />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
