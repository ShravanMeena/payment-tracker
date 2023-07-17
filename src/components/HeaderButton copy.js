import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default function HeaderButton({navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/hambureger.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E9E8',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: 24,
    height: 24,
  },
});
