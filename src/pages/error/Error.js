import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';

export default function Error({type}) {
  // Error Type 01

  const {navigate} = useNavigation();
  if (type === 'type1') {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FCB82F',
        }}>
        <Image
          source={require('../../assets/404.png')}
          style={{
            width: Dimensions.get('screen').width - 80,
            height: 320,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 25,
            textAlign: 'center',
          }}>
          {`Oops! You weren't\nsupposed to see this.`}
        </Text>
        <Text
          style={{
            color: '#000',
            fontWeight: '600',
            fontSize: 12,
            marginVertical: 10,
          }}>
          The page you were looking was loading incorrectly.
        </Text>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: '#000',
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 10,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: '#FFF',
              fontWeight: '600',
              fontSize: 14,
            }}>
            GO BACK
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E9E8',
      }}>
      {/* <Image
        source={require('../../assets/500.png')}
        style={{
          width: Dimensions.get('screen').width - 80,
          height: 320,
        }}
        resizeMode="contain"
      /> */}
      <Text
        style={{
          color: '#000',
          fontWeight: 'bold',
          fontSize: 25,
          textAlign: 'center',
          marginTop: 15,
        }}>
        {`Oops!`}
      </Text>
      <Text
        style={{
          color: '#000',
          fontWeight: '600',
          fontSize: 14,
          marginVertical: 10,
        }}>
        No categories created by you
      </Text>
      <TouchableOpacity
        onPress={() => navigate('AddCategory')}
        style={{
          backgroundColor: '#000',
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginTop: 10,
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: '#FFF',
            fontWeight: '600',
            fontSize: 14,
          }}>
          Create New
        </Text>
      </TouchableOpacity>
    </View>
  );
}
