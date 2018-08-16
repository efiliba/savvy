import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './Tile.css';

export const Tile = props =>
  <View style={styles.container}>
    <Image source={props.img} />
    <Text style={styles.title}>{props.title}</Text>
    <Text style={styles.date}>{props.date}</Text>
  </View>;
