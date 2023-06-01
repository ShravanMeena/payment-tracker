import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../../components/Background';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import {COLORS} from '../../theme';
import {LocalStorage} from '../../helpers/LocalStorage';
import {guidGenerator} from '../../utils/commonUtils';

export default function EditCategory({navigation, route}) {
  let itemValues = route.params.item;

  console.log(itemValues);

  const [cateGoryName, setCateGoryName] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    setCateGoryName(itemValues.title);
    setAmount(itemValues.amount);
  }, [itemValues]);

  const onLoginPressed = async () => {
    let allCategory = LocalStorage.getString('categories')
      ? JSON.parse(LocalStorage.getString('categories'))
      : [];

    if (!cateGoryName || !amount) {
      alert('Fill every field');
      return;
    }

    let updatedCategories = allCategory.filter(
      item => item.id === itemValues.id,
    )[0];

    updatedCategories.amount = amount?.toString();
    updatedCategories.title = cateGoryName;

    LocalStorage.set('categories', JSON.stringify(allCategory));

    navigation.navigate('Explore');

    // const phonenumberError = phonenumberValidator(phonenumber.value);
    // const passwordError = passwordValidator(password.value);
    // if (phonenumberError || passwordError) {
    //   setPhoneNumber({...phonenumber, error: phonenumberError});
    //   setPassword({...password, error: passwordError});
    //   return;
    // }
    // let reqBody = {
    //   phonenumber: '+91' + phonenumber.value,
    //   password: password.value,
    // };
    // const res = await axiosRequest('post', reqBody, '/accounts/login/');
    // if (res.status) {
    //   LocalStorage.set('isLoggedIn', true);
    //   // navigation.reset({
    //   //   index: 0,
    //   //   routes: [{name: 'Dashboard'}],
    //   // });
    // }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <TextInput
        label="Category Name"
        // returnKeyType="next"
        value={cateGoryName}
        onChangeText={text => setCateGoryName(text)}
        // error={!!cateGoryName.error}
        // errorText={cateGoryName.error}
        // autoCapitalize="none"
        // autoCompleteType="phonenumber"
      />

      <TextInput
        label="Amount"
        value={amount}
        onChangeText={text => setAmount(text)}
        // error={!!amount.error}
        // errorText={amount.error}
      />

      <Button mode="contained" onPress={onLoginPressed}>
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
