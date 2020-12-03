import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Button, Image, Input, Text } from 'react-native-elements';
import { useUserContext } from '../contexts/UserContext';
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

  const userContext = useUserContext();
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = async () => {
    await userContext.login(userName, password);
    setUserName('');
    setPassword('');
    navigation.navigate('main');
  };

  const invalid = useMemo(() => userName === '' || password === '', [userName, password]);

  return (
    <Page>
      <Image containerStyle={styles.imageContainer} source={require('../assets/logo.png')}
        style={styles.Image} />
      <Text style={styles.label}>User name</Text>
      <Input placeholder="Your name" value={userName}
        onChangeText={setUserName} />
      <Text style={styles.label}>Password</Text>
      <Input placeholder="Password" secureTextEntry value={password}
        onChangeText={setPassword} />
      <Button title="Login" onPress={login} disabled={invalid} />
    </Page>
  );
};

export default rootPage('login', Component);
