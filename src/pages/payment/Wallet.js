import React from 'react';
import SPCard from '../../theme/SPCard';
import SPText from '../../theme/SPText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SPColors} from '../../theme/SPTheme';
import {TouchableOpacity} from 'react-native';
export default function Wallet({navigation}) {
  return (
    <SPCard
      cardStyle={{
        padding: 30,
      }}>
      <SPCard mBottom={20}>
        <SPText fontSize={22}>Current Balance</SPText>
        <SPText fontSize={26}>₹ 5</SPText>
      </SPCard>

      <SPCard center>
        <SPCard width={'75%'} row spaceBetween center>
          <TouchableOpacity
            onPress={() => navigation.navigate('PaymentScreen')}>
            <SPCard center>
              <SPCard
                cardStyle={{
                  padding: 5,
                  backgroundColor: SPColors.yellow,
                  borderRadius: 4,
                  marginBottom: 5,
                }}>
                <Ionicons name="add" size={40} color={SPColors.white} />
              </SPCard>
              <SPText>ADD</SPText>
            </SPCard>
          </TouchableOpacity>
          <SPCard center>
            <SPCard
              cardStyle={{
                padding: 5,
                backgroundColor: SPColors.redText,
                borderRadius: 4,
                marginBottom: 5,
              }}>
              <Ionicons name="arrow-down" size={40} color={SPColors.white} />
            </SPCard>
            <SPText>Withdraw</SPText>
          </SPCard>

          <SPCard center>
            <SPCard
              cardStyle={{
                padding: 5,
                backgroundColor: SPColors.purple,
                borderRadius: 4,
                marginBottom: 5,
              }}>
              <Ionicons name="arrow-forward" size={40} color={SPColors.white} />
            </SPCard>
            <SPText>Transfer</SPText>
          </SPCard>
        </SPCard>
      </SPCard>
    </SPCard>
  );
}
