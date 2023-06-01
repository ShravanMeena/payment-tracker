import React from 'react';
import {Image, StyleSheet} from 'react-native';

export default function Logo() {
  return (
    <Image source={require('../assets/dreamMatka.png')} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
});
