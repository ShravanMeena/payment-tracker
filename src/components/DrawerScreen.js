import React from 'react';
import {
  Image,
  ImageBackground,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerItem from './drawerItem';
import {COLORS, FONTWEIGHT, SIZES} from '../theme/index';
import {LocalStorage} from '../helpers/LocalStorage';
import {onDisplayNotification} from '../utils/notifeeNotify';
import Clipboard from '@react-native-clipboard/clipboard';
import {getFcmToken} from '../utils/pushNotification';

const DrawerScreen = ({navigation}) => (
  <View style={styles.container}>
    <ImageBackground source={require('../assets/finance.jpeg')}>
      <View style={styles.topContainer}>
        <View style={styles.topDetails}>
          <Image
            style={styles.profile}
            source={{
              uri: 'https://media.licdn.com/dms/image/C4D03AQFXAcLdiSZINg/profile-displayphoto-shrink_400_400/0/1655108281058?e=1691020800&v=beta&t=oeFicJujYKT4wm38AYqANk7Fe88Ao1MS-zRFsgiodP4',
            }}
          />
          <View>
            <Text style={styles.name}>Shravan Meena</Text>
            <View style={styles.row}>
              <Icon name="map-marker" size={15} style={styles.icon} />
              <Text style={styles.locationText}>Jaipur, Rajasthan</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
    <ScrollView>
      <View style={styles.itemContainer}>
        <DrawerItem
          onPress={() => navigation.navigate('FinancePro')}
          iconName="chess-king"
          text="Finance Pro"
          pro
        />
        <DrawerItem
          onPress={() => navigation.navigate('QrCodeScannerScreen')}
          iconName="qrcode-scan"
          text="Scan QR Code"
        />

        <DrawerItem
          onPress={() => navigation.navigate('Explore')}
          iconName="apple-finder"
          text="Categories"
        />
        <DrawerItem
          onPress={() => navigation.navigate('History')}
          iconName="history"
          text="Payment History"
        />
        <View style={styles.line} />
        <DrawerItem
          onPress={() => {
            Alert.alert(
              'Do you want to logout',
              'You loss your data after logout',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    console.log('Cancel Pressed');
                  },
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () => {
                    LocalStorage.clearAll();

                    onDisplayNotification({
                      title: '🎉 Congratulations!',
                      body: 'You are successfully reset your account',
                    });
                  },
                },
              ],
            );
          }}
          iconName="exit-to-app"
          text="Logout"
        />
      </View>
    </ScrollView>
    <View style={styles.bottomContainer}>
      <Text style={styles.appName}>Pay Sight</Text>
      <Text style={styles.versionText}>Version 1.0.0</Text>
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
    fontSize: SIZES.h1,
    fontWeight: FONTWEIGHT.bold,
  },
  versionText: {
    color: COLORS.grey,
    fontSize: SIZES.h4,
    fontWeight: FONTWEIGHT.weight500,
  },
});
