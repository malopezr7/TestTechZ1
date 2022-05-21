import React from 'react';
import {Categories} from '../models/Category';
import {FlatList} from 'react-native';
import TabButton from './TabButton';

const TabBar = (props: {categories: Categories; filterLessons: any}) => {
  const {categories, filterLessons} = props;
  return (
    <FlatList
      horizontal={true}
      data={categories}
      renderItem={item => (
        <TabButton category={item.item} filterLessons={filterLessons} />
      )}
    />
  );
};

export default TabBar;
