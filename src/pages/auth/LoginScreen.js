import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import {theme} from '../../core/theme';
import {phonenumberValidator} from '../../helpers/phonenumberValidator';
import {passwordValidator} from '../../helpers/passwordValidator';
import {COLORS} from '../../theme';
import {axiosRequest} from '../../utils/handler';
import {LocalStorage} from '../../helpers/LocalStorage';

export default function LoginScreen({navigation}) {
  const [phonenumber, setPhoneNumber] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const onLoginPressed = async () => {
    const phonenumberError = phonenumberValidator(phonenumber.value);
    const passwordError = passwordValidator(password.value);
    if (phonenumberError || passwordError) {
      setPhoneNumber({...phonenumber, error: phonenumberError});
      setPassword({...password, error: passwordError});
      return;
    }

    let reqBody = {
      phonenumber: '+91' + phonenumber.value,
      password: password.value,
    };

    const res = await axiosRequest('post', reqBody, '/accounts/login/');

    if (res.status) {
      LocalStorage.set('isLoggedIn', true);

      // navigation.reset({
      //   index: 0,
      //   routes: [{name: 'Dashboard'}],
      // });
    }
  };

  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Phone Number"
        returnKeyType="next"
        value={phonenumber.value}
        onChangeText={text => setPhoneNumber({value: text, error: ''})}
        error={!!phonenumber.error}
        errorText={phonenumber.error}
        autoCapitalize="none"
        autoCompleteType="phonenumber"
        // textContentType="number"
        // keyboardType="number-pad"
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
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
