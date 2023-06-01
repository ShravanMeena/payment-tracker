import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SPCard from '../../theme/SPCard';
import {SPColors} from '../../theme/SPTheme';
import SPText from '../../theme/SPText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/Button';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {LocalStorage} from '../../helpers/LocalStorage';
import Error from '../error/Error';

const {width, height} = Dimensions.get('window');

export function Item({item}) {
  const {navigate} = useNavigation();
  return (
    <SPCard mBottom={4}>
      <TouchableOpacity
        onPress={() => navigate('EditCategory', {item})}
        style={styles.item}>
        <SPCard row spaceBetween>
          <SPCard row center>
            <SPCard>
              <SPText fontSize={16} style={styles.title} fontWeight="700">
                {item.title}
              </SPText>
            </SPCard>
          </SPCard>
        </SPCard>
      </TouchableOpacity>
    </SPCard>
  );
}
export default function History({navigation}) {
  const isFocused = useIsFocused();

  const [cateData, setCateData] = useState([]);

  useEffect(() => {
    let allCategory = LocalStorage.getString('categories')
      ? JSON.parse(LocalStorage.getString('categories'))
      : [];

    if (isFocused) {
      console.log('In inFocused Block', allCategory);
      setCateData(allCategory);
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('AddCategory')}>
          Add New Category
        </Button>
      </View>

      {cateData?.length === 0 && (
        <View style={{flex: 1, marginTop: 200}}>
          <Error />
        </View>
      )}

      <FlatList
        numColumns={2}
        data={cateData}
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
    padding: 10,
  },
  item: {
    backgroundColor: SPColors.white,
    paddingVertical: 15,
    width: width / 2 - 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: SPColors.darkGreyText,
    borderRadius: 5,
    marginLeft: 8,
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
  },
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abfb28ba',
    title: 'Work',
    amount: '599',
  },
  {
    id: '3ac68afc-c605a-48d3-a4f8-fbd91aa97f63',
    title: 'Vacation',
    amount: '599',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2d9d72',
    title: 'Health',
    amount: '599',
  },
  {
    id: '58694a0f-3da1-471f-bad96-145571e29d72',
    title: 'Gift',
    amount: '599',
  },
  {
    id: '58694a0f-3da1a-471f-bd96-145571e29d72',
    title: 'Food',
    amount: '599',
  },
  {
    id: '58694a0f-3da1-471fa-bd96-145571e29d72',
    title: 'Movie',
    amount: '599',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145a571e29d72',
    title: 'House',
    amount: '599',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29ds72',
    title: 'Home',
    amount: '599',
  },
  {
    id: '58694a0f-3da1aa-471f-bd96-145571e29ds72',
    title: 'Loan',
    amount: '599',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557sa1e29ds72',
    title: 'Other',
    amount: '599',
  },
];
