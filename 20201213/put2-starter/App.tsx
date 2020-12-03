import React from 'react';
import { activateKeepAwake } from 'expo-keep-awake';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    fontSize: 50
  },
});

const App: React.FC = () => {

  if (__DEV__) {
    activateKeepAwake();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello, World!</Text>
    </View>
  );
};

export default App;
