import React, { useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, View } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import { useTrashContext } from '../contexts/TrashContext';
import { Page, mainPage } from './MainPage';

const styles = StyleSheet.create({
  lead: {
    fontSize: 35,
    color: '#fff',
    marginBottom: 30,
  },
  select: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  or: {
    fontSize: 20,
    color: '#fff',
    marginTop: 6,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  upload: {
    backgroundColor: '#ff1493',
  },
});

const Component: React.FC = () => {
  return (
    <Page>
      <Text style={styles.lead}>Let's go pick up trash!</Text>
      <View style={styles.select}>
        <Button title="Take a photo" />
        <Text style={styles.or}>or</Text>
        <Button title="Pick an image" />
      </View>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1603730347631-6aacbfef195a' }}
        style={styles.image} />
      <Button title="Pick up trash!" buttonStyle={styles.upload} />
    </Page>
  );
};

export default mainPage('pick', Component, 'camera');
