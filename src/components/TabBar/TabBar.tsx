import React from 'react';
import {Categories, Category} from '../../models/Category';
import TabButton from './TabButton/TabButton';
import {FlatList} from './TabBar.styles';

const TabBar = (props: {categories: Categories; filterLessons: any}) => {
  const {categories, filterLessons} = props;
  const renderItem = (item: {item: Category}) => (
    <TabButton category={item.item} filterLessons={filterLessons} />
  );
  return (
    <FlatList
      horizontal={true}
      data={categories}
      keyExtractor={(item: Category) => item.id}
      renderItem={renderItem}
    />
  );
};

export default TabBar;
