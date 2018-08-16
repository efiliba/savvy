import React from 'react';
import {Platform, View, Text, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {styles} from './App.css';
import {Tile, ScrollContainer} from './src/components';

const platform = Platform.select({
  ios: 'IOS Specific code,\n' + 'and a new line',
  android: 'Android code'
});

const data = [{
  img: require("./src/img/image1.png"),
  title: "Credit score 101 for uni students",
  date: "14 August 2018"
}, {
  img: require("./src/img/image1.jpg"),
  title: "Not so obvious reasons to monitor your credit score",
  date: "08 August 2018"
}];

const HomeScreen = () =>
  <View style={styles.container}>
    <Text style={styles.welcome}>React Native! 5</Text>
    <Text style={styles.instructions}>{platform}</Text>
    <ScrollContainer items={data}>
      <Tile />
    </ScrollContainer>
  </View>;

const DetailsScreen = props =>
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Details Screen</Text>
    <Button
      title="Go to Main"
      onPress={() => props.navigation.navigate('Home')}
    />
  </View>;

// or export default ...
const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
}, {
  initialRouteName: 'Details'
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
