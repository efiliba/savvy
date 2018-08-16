import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './TileContainer.css';

export const TileContainer = props =>
  <View style={styles.container}>
    {props.children}
  </View>;
