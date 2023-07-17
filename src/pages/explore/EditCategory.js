import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../../components/Background';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import {COLORS} from '../../theme';
import {LocalStorage} from '../../helpers/LocalStorage';
import { onDisplayNotification } from '../../utils/notifeeNotify';

export default function EditCategory({navigation, route}) {
  let itemValues = route.params.item;

  console.log(itemValues);

  const [cateGoryName, setCateGoryName] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    setCateGoryName(itemValues.title);
    setAmount(itemValues.amount);
  }, [itemValues]);

  const onSaveChange = async () => {
    let allCategory = LocalStorage.getString('categories')
      ? JSON.parse(LocalStorage.getString('categories'))
      : [];

    if (!cateGoryName || !amount) {
      alert('Every field required');
      return;
    }

    let updatedCategories = allCategory.filter(
      item => item.id === itemValues.id,
    )[0];

    updatedCategories.amount = amount?.toString();
    updatedCategories.title = cateGoryName;

    LocalStorage.set('categories', JSON.stringify(allCategory));

    navigation.navigate('Explore');

    onDisplayNotification({
      title: 'Great!',
      body: `You just edited a category (${cateGoryName})`,
    });
  };

  return (
    <>
      <BackButton goBack={navigation.goBack} />

      <Background>
        <TextInput
          label="Category Name"
          returnKeyType="next"
          value={cateGoryName}
          onChangeText={text => setCateGoryName(text)}
        />

        <TextInput
          label="Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={text => setAmount(text)}
        />

        <Button mode="contained" onPress={onSaveChange}>
          Save Changes
        </Button>

        <View style={styles.row}>
          <Text>OR</Text>
        </View>

        <Button
          mode="contained"
          onPress={() => navigation.navigate('AddCategory')}>
          Create New Category
        </Button>
      </Background>
    </>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: COLORS.darkGrey,
  },
  link: {
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});
