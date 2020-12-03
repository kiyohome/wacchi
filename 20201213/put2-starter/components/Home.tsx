import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
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

  return (
    <Page>
      <Text style={styles.lead}>Let's go pick up trash!</Text>
      <Text style={styles.point}>
        123
        <Text style={styles.unit}>pt</Text>
      </Text>
      <View style={styles.trashList}>
        <Card containerStyle={styles.trash}>
          <Card.Title>2020/11/19</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: 'https://images.unsplash.com/photo-1518699376815-e6cae5137429' }} />
        </Card>
        <Card containerStyle={styles.trash}>
          <Card.Title>2020/11/18</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: 'https://images.unsplash.com/photo-1518699376815-e6cae5137429' }} />
        </Card>
        <Card containerStyle={styles.trash}>
          <Card.Title>2020/11/17</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: 'https://images.unsplash.com/photo-1518699376815-e6cae5137429' }} />
        </Card>
        <Card containerStyle={styles.trash}>
          <Card.Title>2020/11/16</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: 'https://images.unsplash.com/photo-1518699376815-e6cae5137429' }} />
        </Card>
      </View>
    </Page>
  );
};

export default mainPage('home', Component, 'home');
