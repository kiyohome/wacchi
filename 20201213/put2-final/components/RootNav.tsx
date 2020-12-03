import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useUserContext } from '../contexts/UserContext';
import Login from './Login';
import MainNav from './MainNav';

const Stack = createStackNavigator();

const RootNav: React.FC = () => {

  const userContext = useUserContext();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {userContext.isLoggedIn ? (
          <Stack.Screen {...MainNav} />
        ) : (
          <Stack.Screen {...Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
