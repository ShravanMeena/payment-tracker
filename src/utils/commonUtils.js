import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {PermissionsAndroid} from 'react-native';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
};

export const addHaptic = () => {
  RNReactNativeHapticFeedback.trigger('impactLight', options);
};

export function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  );
}

function random(number) {
  return Math.floor(Math.random() * number);
}
export function randomColor() {
  return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
}

export async function requestReadSmsPermission() {
  try {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_SMS, {
      title: '(...)',
      message: "Why you're asking for...",
    });
  } catch (err) {}
}
