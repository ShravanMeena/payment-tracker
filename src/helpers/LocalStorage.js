import {MMKV} from 'react-native-mmkv';

const encryptionKey = 'myEncryptionKey';

export const LocalStorage = new MMKV({
  id: `encryted-storage`,
  encryptionKey,
});
