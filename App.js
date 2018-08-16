import React from 'react';
import {Platform, View, Text} from 'react-native';
import {styles} from './App.css';
import {Tile, TileContainer} from './src/components';

const platform = Platform.select({
  ios: 'IOS Specific code,\n' + 'and a new line',
  android: 'Android code'
});

export default class App extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native! 5</Text>
        <Text style={styles.instructions}>{platform}</Text>
        <TileContainer>
          <Tile img={require('./src/img/image1.png')} title="Credit score 101 for uni students" date="14 August 2018" />
        </TileContainer>
      </View>
    );
  }
}
