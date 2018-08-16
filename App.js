import React from 'react';
import {Platform, View, Text} from 'react-native';
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

export default class App extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native!</Text>
        <Text style={styles.instructions}>{platform}</Text>
        {/* <ScrollContainer items={data} component={Tile} /> */}
        <ScrollContainer items={data}>
          <Tile />
        </ScrollContainer>
      </View>
    );
  }
}
