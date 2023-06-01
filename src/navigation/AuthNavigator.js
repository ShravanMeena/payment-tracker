import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthScreens} from '../constants/NavigationConstants';
import {LoginScreen} from '../pages/auth';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={AuthScreens.Login} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
