import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Icon, normalize } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00bfff',
  },
  page: {
    flexGrow: 1,
    backgroundColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Page: React.FC<PropsWithChildren<object>> = ({ children }) => {
  return (
    <>
      <Header
        leftComponent={{ text: 'PUT', style: { color: '#fff', fontWeight: '700' } }}
        rightComponent={{ text: 'User name', style: { color: '#fff' } }}
      />
      <ScrollView contentContainerStyle={styles.page}>{children}</ScrollView>
    </>
  );
};

const mainPage = (screenName: string, page: React.FC, iconName: string) => {
  return {
    name: screenName,
    component: page,
    options: {
      tabBarIcon: () => <Icon name={iconName} color="#00bfff" size={normalize(24)} />,
    },
  };
};

export { Page, mainPage };
