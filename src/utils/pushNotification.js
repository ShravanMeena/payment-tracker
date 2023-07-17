import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

export async function getFcmToken() {
  try {
    let fcmToken = await messaging().getToken();

    console.log('====================================');
    console.log(fcmToken);
    console.log('====================================');
    return fcmToken;
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
}

export async function notificationListener() {
  try {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    messaging().onMessage(async remoteMessage => {
      console.log('====================================');
      console.log('Received in Foregroudn', remoteMessage);
      console.log('====================================');
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        //   setLoading(false);
      });
  } catch (error) {}
}
