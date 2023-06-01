import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import SPCard from '../../theme/SPCard';
import {SPColors} from '../../theme/SPTheme';
import SPText from '../../theme/SPText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abfb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605a-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2d9d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bad96-145571e29d72',
    title: 'Four Item',
  },
  {
    id: '58694a0f-3da1a-471f-bd96-145571e29d72',
    title: 'FIVE Item',
  },
  {
    id: '58694a0f-3da1-471fa-bd96-145571e29d72',
    title: 'Six Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145a571e29d72',
    title: 'Seven Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29ds72',
    title: 'Eight Item',
  },
  {
    id: '58694a0f-3da1aa-471f-bd96-145571e29ds72',
    title: 'Nine Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557sa1e29ds72',
    title: 'Ten Item',
  },
];

const Item = ({title}) => (
  <SPCard mBottom={4}>
    <View style={styles.item}>
      <SPCard row spaceBetween>
        <SPCard row center>
          <SPCard mRight={20}>
            <FontAwesome name="money" size={24} />
          </SPCard>
          <SPCard>
            <SPText fontSize={16} fontWeight="700">
              Payment to
            </SPText>
            <SPText fontSize={12}>Shravan Meena</SPText>
          </SPCard>
        </SPCard>

        <SPCard center>
          <SPText fontSize={12} color={SPColors.black}>
            5
          </SPText>
          {title === 'Six Item' && (
            <SPText fontSize={12} color={SPColors.redText}>
              Falied
            </SPText>
          )}
        </SPCard>
      </SPCard>
    </View>
  </SPCard>
);

export default function History() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SPColors.smokeWhite,
    padding: 10,
  },
  item: {
    backgroundColor: SPColors.white,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: SPColors.darkGreyText,
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
  },
});
