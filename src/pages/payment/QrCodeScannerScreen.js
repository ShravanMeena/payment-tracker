import React from 'react';

import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import HeaderButton from '../../components/HeaderButton';
import { useIsFocused } from '@react-navigation/native';
// import {RNCamera} from 'react-native-camera';

export default function QrCodeScannerScreen({navigation}) {
  const onSuccess = e => {
    navigation.navigate('PaymentScreen', {e});

    console.log(JSON.stringify(e));
    let url = e.data + '&am=1';
    console.log(url);
    // Linking.canOpenURL(url)
    //   .then(supported => {
    //     if (supported) {
    //       return Linking.openURL(url);
    //     } else {
    //       console.log(`Can't handle url: ${url}`);
    //     }
    //   })
    //   .then(data => {
    //     console.log(data);
    //     // Handle the data returned by the UPI app here
    //   })
    //   .catch(error => {
    //     console.log(`An error occurred: ${error}`);
    //   });

    // Linking.openURL(url).catch(err =>
    //   console.error('An error occured', err),
    // );
  };

  const isFocused = useIsFocused();


  return (
    <>
      <HeaderButton navigation={navigation} />
      <View style={{flex: 1, marginTop: 40}}>
     {isFocused &&   <QRCodeScanner
          onRead={onSuccess}
          //   flashMode={RNCamera.Constants.FlashMode.torch}
          topContent={<Text style={styles.centerText}>Scan the QR code.</Text>}
          bottomContent={
            <></>
            // <TouchableOpacity style={styles.buttonTouchable}>
            //   <Text style={styles.buttonText}>OK. Pay Now!</Text>
            // </TouchableOpacity>
          }
        />}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
