import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SPCard from '../../theme/SPCard';
import SPText from '../../theme/SPText';
import {SPColors, SPComponentSize} from '../../theme/SPTheme';

const data = [
  {
    value: 'Call',
  },
  {
    value: 'Whatsapp',
  },
  {
    value: 'Add',
  },
  {
    value: 'Withdraw',
  },
];

export default function BasicInfo() {
  return (
    <SPCard row spaceBetween flexWrap="wrap">
      {data.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => {}}>
            <SPCard
              cardStyle={{
                width: SPComponentSize.fullWidth / 2.5,
                backgroundColor: SPColors.greenSOL,
                padding: 10,
                borderRadius: 4,
              }}
              mTop={20}
              center>
              <SPText fontSize={18} fontWeight="700" color={SPColors.white}>
                {item.value}
              </SPText>
            </SPCard>
          </TouchableOpacity>
        );
      })}
    </SPCard>
  );
}
