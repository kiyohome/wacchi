import React from 'react';
import { Button } from 'react-native-elements';
import { Page, mainPage } from './MainPage';

const Component: React.FC = () => {
  return (
    <Page>
      <Button title="Logout" />
    </Page>
  );
};

export default mainPage('logout', Component, 'lock');
