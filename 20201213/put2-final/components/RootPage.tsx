import React, { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    backgroundColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Page: React.FC<PropsWithChildren<object>> = ({ children }) => {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      {children}
    </ScrollView>
  );
};

function rootPage(screenName: string, page: React.FC) {
  return {
    name: screenName,
    component: page,
  };
}

export { Page, rootPage };
