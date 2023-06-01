import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import {passwordValidator} from '../../helpers/passwordValidator';
import {nameValidator} from '../../helpers/nameValidator';
import {COLORS} from '../../theme';
import {phonenumberValidator} from '../../helpers/phonenumberValidator';
import {axiosRequest} from '../../utils/handler';

export default function RegisterScreen({navigation}) {
  const [name, setName] = useState({value: '', error: ''});
  const [phonenumber, setphonenumber] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const phonenumberError = phonenumberValidator(phonenumber.value);
    const passwordError = passwordValidator(password.value);
    if (phonenumberError || passwordError || nameError) {
      setName({...name, error: nameError});
      setphonenumber({...phonenumber, error: phonenumberError});
      setPassword({...password, error: passwordError});
      return;
    }

    let reqBody = {
      phonenumber: '+91' + phonenumber.value,
      password: password.value,
      name: name.value,
    };

    const res = await axiosRequest('post', reqBody, '/accounts/register/');
    console.log('===res=================================');
    console.log(res);
    console.log('=======res=============================');
    if (res.data.status) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Dashboard'}],
      });
    }
  };

  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({value: text, error: ''})}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Phone"
        returnKeyType="next"
        value={phonenumber.value}
        onChangeText={text => setphonenumber({value: text, error: ''})}
        error={!!phonenumber.error}
        errorText={phonenumber.error}
        autoCapitalize="none"
        // autoCompleteType="email"
        // textContentType="emailAddress"
        // keyboardType=""
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{marginTop: 24}}>
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});
