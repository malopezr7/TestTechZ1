import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

const Item = ({id, title, content, image}) => (
  <View style={styles.content}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  content: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default Item;
