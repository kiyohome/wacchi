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

  const trashContext = useTrashContext();
  const navigation = useNavigation();
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
    (async () => {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickUpTrash = async () => {
    const response = await fetch(image);
    const trash = await response.blob();
    await trashContext.postTrash(trash);
    setImage('');
    navigation.navigate('home');
  };

  const invalid = useMemo(() => image === '', [image]);

  return (
    <Page>
      <Text style={styles.lead}>Let's go pick up trash!</Text>
      <View style={styles.select}>
        <Button title="Take a photo" onPress={takePhoto} />
        <Text style={styles.or}>or</Text>
        <Button title="Pick an image" onPress={pickImage} />
      </View>
      {image !== '' && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Pick up trash!" onPress={pickUpTrash}
        buttonStyle={styles.upload} disabled={invalid} />
    </Page>
  );
};

export default mainPage('pick', Component, 'camera');
