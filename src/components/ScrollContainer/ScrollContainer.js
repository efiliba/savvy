import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from './ScrollContainer.css';

export const ScrollContainer = ({items, children}) =>
  <ScrollView style={styles.container}>
    {items.map((item, index) =>
      React.cloneElement(children, Object.assign(item, {key: index}))
    )}
  </ScrollView>;
