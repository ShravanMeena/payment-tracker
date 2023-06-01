import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import SPText from '../../theme/SPText';
import {SPColors} from '../../theme/SPTheme';
import SPCard from '../../theme/SPCard';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abfb28ba',
    title: 'Single',
    subTitle: 'Digit',
  },
  {
    id: '3ac68afc-c605a-48d3-a4f8-fbd91aa97f63',
    title: 'Jodi',
    subTitle: 'Digit',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2d9d72',
    title: 'Single',
    subTitle: 'Pana',
  },
  {
    id: '58694a0f-3da1-471f-bad96-145571e29d72',
    title: 'Double',
    subTitle: 'Pana',
  },
  {
    id: '58694a0f-3da1-471f-bad96-145571e29d72',
    title: 'Triple',
    subTitle: 'Pana',
  },
  {
    id: '58694a0f-3da1-471f-bad96-145571e29d72',
    title: 'Half',
    subTitle: 'Sangam',
  },
  {
    id: '58694a0f-3da1-471f-bad96-145571e29d72',
    title: 'Full',
    subTitle: 'Sangam',
  },
];

const Item = ({item}) => (
  <SPCard>
    <View style={styles.item}>
      <SPText textAlign="center" fontSize={20} fontWeight="700">
        {item.title}
      </SPText>
      <SPText textAlign="center" fontSize={14} fontWeight="600">
        {item.subTitle}
      </SPText>
    </View>
  </SPCard>
);

export default function GameTypes() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SPColors.smokeWhite,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    borderWidth: 1,
    borderColor: SPColors.darkGreyText,
    // backgroundColor: SPColors.white,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 20,
    width: 120,
    height: 120,
    borderRadius: 5,
  },
});
