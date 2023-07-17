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
import Button from '../../components/Button';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {LocalStorage} from '../../helpers/LocalStorage';
import Error from '../error/Error';
import HeaderButton from '../../components/HeaderButton';
import {Text} from 'react-native-paper';

const {width} = Dimensions.get('window');

export function Item({item}) {
  const {navigate} = useNavigation();
  return (
    <SPCard mBottom={4}>
      <TouchableOpacity
        onPress={() => navigate('EditCategory', {item})}
        style={[styles.item]}>
        <SPCard row spaceBetween>
          <SPCard row center>
            <SPCard>
              <SPText fontSize={16} style={styles.title} fontWeight="700">
                {item.title}
              </SPText>

              <SPText fontSize={12} style={styles.title} fontWeight="700">
                ₹{item.amount}
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
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let allCategory = LocalStorage.getString('categories')
      ? JSON.parse(LocalStorage.getString('categories'))
      : [];

    if (isFocused) {
      if (allCategory?.length === 0) {
        return;
      }
      setCateData(allCategory);

      const total = allCategory.reduce((accumulator, item) => {
        const amount = parseInt(item.amount);
        return accumulator + amount;
      }, 0);

      setSum(total);
    }
  }, [isFocused]);

  return (
    <>
      <HeaderButton navigation={navigation} />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: 10,
          borderColor: 'gray',
          borderWidth: 1,
        }}>
        <Text>
          Total Left Budget: <Text style={{fontSize: 30}}>₹{sum}</Text>
        </Text>
      </View>
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
            <Error navigation={navigation} />
          </View>
        )}

        <FlatList
          numColumns={2}
          data={cateData}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
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
    fontSize: 20,
  },
});


