import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { useUserContext } from '../contexts/UserContext';
import { Page, mainPage } from './MainPage';

const Component: React.FC = () => {

  const userContext = useUserContext();
  const navigation = useNavigation();

  const logout = async () => {
    await userContext.logout();
    navigation.navigate('login');
  };

  return (
    <Page>
      <Button title="Logout" onPress={logout} />
    </Page>
  );
};

export default mainPage('logout', Component, 'lock');
