import React from 'react';
import {Categories} from '../models/Category';
import {FlatList} from 'react-native';
import TabButton from './TabButton';

const TabBar = (props: {categories: Categories}) => {
  return (
    <FlatList
      horizontal={true}
      data={props.categories}
      renderItem={item => <TabButton text={item.item.title} />}
    />
  );
};

export default TabBar;
