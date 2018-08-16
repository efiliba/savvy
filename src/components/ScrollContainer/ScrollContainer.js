import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from './ScrollContainer.css';

export const ScrollContainer = ({items, component, children}) =>
  <ScrollView style={styles.container}>
    {items.map((item, index) =>
      React.cloneElement(component || children, Object.assign({key: index}, item))
    )}
  </ScrollView>;
