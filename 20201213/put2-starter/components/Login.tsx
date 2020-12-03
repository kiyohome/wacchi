import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Image, Input, Text } from 'react-native-elements';
import { rootPage, Page } from './RootPage';

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 500,
  },
  imageContainer: {
    marginTop: -30,
    marginBottom: 80,
  },
  label: {
    alignSelf: 'flex-start',
    paddingLeft: 11,
    fontSize: 20,
    color: '#fff',
  },
});

const Component: React.FC = () => {
  return (
    <Page>
      <Image containerStyle={styles.imageContainer} source={require('../assets/logo.png')}
        style={styles.image} />
      <Text style={styles.label}>User name</Text>
      <Input placeholder="Your name" />
      <Text style={styles.label}>Password</Text>
      <Input placeholder="Password" />
      <Button title="Login" />
    </Page>
  );
};

export default rootPage('login', Component);
