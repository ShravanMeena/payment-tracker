import {GenericScreens, MainScreens} from '../constants/NavigationConstants';
import TabNavigator from './TabNavigator';
import Profile from '../pages/profile/Profile';
import {createStackNavigator} from '@react-navigation/stack';
import GameTypes from '../pages/gameTypes/GameTypes';
import PaymentScreen from '../pages/payment/PaymentScreen';
import EditCategory from '../pages/explore/EditCategory';
import AddCategory from '../pages/explore/AddCategory';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={MainScreens.Tabs}
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <MainStack.Screen name={GenericScreens.Profile} component={Profile} />
      <MainStack.Screen name="PaymentScreen" component={PaymentScreen} />
      <MainStack.Screen
        options={{
          headerShown: false,
        }}
        name="EditCategory"
        component={EditCategory}
      />

      <MainStack.Screen
        options={{
          headerShown: false,
        }}
        name="AddCategory"
        component={AddCategory}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
