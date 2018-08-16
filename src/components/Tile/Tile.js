import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './Tile.css';

export const Tile = props =>
  <View style={styles.container}>
    <Image source={props.img} />
    <Text>{props.title}</Text>
    <Text>{props.date}</Text>
  </View>;
