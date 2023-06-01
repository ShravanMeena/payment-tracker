import React from 'react';
import {
  Image,
  ImageBackground,
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerItem from './drawerItem';
import {COLORS, FONTWEIGHT, SIZES} from '../theme/index';

const DrawerScreen = ({navigation}) => (
  <View style={styles.container}>
    <ImageBackground source={require('../assets/finance.jpeg')}>
      <View style={styles.topContainer}>
        <View style={styles.topDetails}>
          <Image
            style={styles.profile}
            source={require('../assets/profile.jpeg')}
          />
          <View>
            <Text style={styles.name}>Jenna Madelynn</Text>
            <View style={styles.row}>
              <Icon name="map-marker" size={15} style={styles.icon} />
              <Text style={styles.locationText}>New York, US</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
    <ScrollView>
      <View style={styles.itemContainer}>
        <DrawerItem
          onPress={() => alert('We are wroking on it')}
          iconName="chess-king"
          text="Finance Pro"
          pro
        />
        <DrawerItem
          onPress={() => navigation.navigate('QrCodeScannerScreen')}
          iconName="qrcode-scan"
          text="Scan QR Code"
        />
        <View style={styles.line} />
        <DrawerItem
          onPress={() => alert('Wait bhaii')}
          iconName="exit-to-app"
          text="Logout"
        />
      </View>
    </ScrollView>
    <View style={styles.bottomContainer}>
      <Text style={styles.appName}>Pay Sight</Text>
      <Text style={styles.versionText}>Version 1.0.1</Text>
    </View>
  </View>
);

export default DrawerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: COLORS.transparent,
    height: SIZES.height / 5,
    justifyContent: 'flex-end',
    padding: 15,
  },
  topDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 15,
    borderColor: COLORS.white,
    borderWidth: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: COLORS.white,
    fontSize: SIZES.h2,
    fontWeight: FONTWEIGHT.bold,
    marginBottom: 2,
  },
  locationText: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    fontWeight: FONTWEIGHT.weight500,
  },
  icon: {
    color: COLORS.white,
    marginRight: 5,
  },
  itemContainer: {
    marginTop: 10,
  },
  line: {
    backgroundColor: COLORS.lightGrey,
    height: 2,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  appName: {
    color: COLORS.grey,
    fontSize: SIZES.h3,
    fontWeight: FONTWEIGHT.bold,
  },
  versionText: {
    color: COLORS.grey,
    fontSize: SIZES.h4,
    fontWeight: FONTWEIGHT.weight500,
  },
});
