import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { useTrashContext } from '../contexts/TrashContext';
import { mainPage, Page } from './MainPage';

const styles = StyleSheet.create({
  lead: {
    fontSize: 35,
    color: '#fff',
    marginTop: 50,
    marginBottom: 30,
  },
  point: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 50,
  },
  unit: {
    fontSize: 30,
    color: '#fff',
  },
  trashList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  trash: {
    width: 140,
  },
});

const Component: React.FC = () => {

  const trashContext = useTrashContext();

  useEffect(() => {
    (async () => {
      await trashContext.getTrashList();
    })();
  }, []);

  return (
    <Page>
      <Text style={styles.lead}>Let's go pick up trash!</Text>
      <Text style={styles.point}>
        {trashContext.point}
        <Text style={styles.unit}>pt</Text>
      </Text>
      <View style={styles.trashList}>
        {trashContext.trashList.map((trash, index) => (
          <Card key={index} containerStyle={styles.trash}>
            <Card.Title>{trash.date}</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: trash.imageUrl }} />
          </Card>
        ))}
      </View>
    </Page>
  );
};

export default mainPage('home', Component, 'home');
