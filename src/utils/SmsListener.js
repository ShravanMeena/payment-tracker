import {DeviceEventEmitter} from 'react-native';

const SmsListener = {
  startListener(callback) {
    DeviceEventEmitter.addListener('onSmsReceived', callback);
  },
  stopListener(callback) {
    DeviceEventEmitter.removeListener('onSmsReceived', callback);
  },
};

export default SmsListener;
