import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {ResetPasswordScreen} from './src/pages/auth';
import {createStackNavigator} from '@react-navigation/stack';
import PaymentScreen from './src/pages/payment/PaymentScreen';
import QrCodeScannerScreen from './src/pages/payment/QrCodeScannerScreen';
import CoreNavigation from './src/navigation/CoreNavigation';
import AddCategory from './src/pages/explore/AddCategory';
import EditCategory from './src/pages/explore/EditCategory';
import {
  getFcmToken,
  notificationListener,
  requestUserPermission,
} from './src/utils/pushNotification';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
import {onDisplayNotification} from './src/utils/notifeeNotify';
import {LocalStorage} from './src/helpers/LocalStorage';
import {catData} from './src/data/catData';
import SmsListener from './src/utils/SmsListener';
import {requestReadSmsPermission} from './src/utils/commonUtils';

const MainStack = createStackNavigator();

export default function App() {
  useEffect(() => {
    // requestUserPermission();
    // notificationListener();
    // getFcmToken();

    let allCategory = LocalStorage.getString('categories')
      ? JSON.parse(LocalStorage.getString('categories'))
      : [];

    if (allCategory.length === 0) {
      LocalStorage.set('categories', JSON.stringify(catData));
    }
  }, []);

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //     onDisplayNotification();
  //   });

  //   return unsubscribe;
  // }, []);

  // useEffect(() => {
  //   requestReadSmsPermission();

  //   const onSmsReceived = event => {
  //     const sms = event.message;
  //     console.log('==smssmssmssms==================================');
  //     console.log(sms);
  //     console.log('=================smssms===================');
  //     // Process the SMS here, extract payment information and create expense categories
  //   };

  //   SmsListener.startListener(onSmsReceived);

  //   return () => {
  //     SmsListener.stopListener(onSmsReceived);
  //   };
  // }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="CoreNavigation"
          component={CoreNavigation}
        />

        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="AddCategory"
          component={AddCategory}
        />
        <MainStack.Screen name="PaymentScreen" component={PaymentScreen} />
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="EditCategory"
          component={EditCategory}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
