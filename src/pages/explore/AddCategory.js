import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../../components/Background';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import {COLORS} from '../../theme';
import {LocalStorage} from '../../helpers/LocalStorage';
import {guidGenerator, randomColor} from '../../utils/commonUtils';
import {onDisplayNotification} from '../../utils/notifeeNotify';

export default function AddCategory({navigation}) {
  const [cateGoryName, setCateGoryName] = useState('');
  const [amount, setAmount] = useState('');

  const onSaveChanges = async () => {
    let allCategory = LocalStorage.getString('categories')
      ? JSON.parse(LocalStorage.getString('categories'))
      : [];

    if (!cateGoryName || !amount) {
      alert('Fill every field');
      return;
    }

    let newCategoires = {
      amount: amount?.toString(),
      title: cateGoryName,
      id: allCategory.length + 1 + Date.now(),
      color: randomColor(),
    };

    LocalStorage.set(
      'categories',
      JSON.stringify([...allCategory, newCategoires]),
    );

    onDisplayNotification({
      title: '🎉 Congratulations!',
      body: `You just create a new category (${cateGoryName})`,
    });

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
    <>
      <BackButton goBack={navigation.goBack} />

      <Background>
        <TextInput
          label="Category Name"
          value={cateGoryName}
          onChangeText={text => setCateGoryName(text)}
        />

        <TextInput
          keyboardType="numeric"
          label="Amount"
          value={amount}
          onChangeText={text => setAmount(text)}
        />

        <Button mode="contained" onPress={onSaveChanges}>
          Save Changes
        </Button>
      </Background>
    </>
  );
}
