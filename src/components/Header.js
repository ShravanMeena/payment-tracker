import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {theme} from '../core/theme';
import {COLORS} from '../theme';

export default function Header(props) {
  return <Text style={styles.header} {...props} />;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: COLORS.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
});
