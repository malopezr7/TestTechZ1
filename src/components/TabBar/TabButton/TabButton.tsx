import * as React from 'react';
import {Category} from '../../../models/Category';
import {TabBtn} from './TabButton.styles';

const TabButton = (props: {category: Category; filterLessons: any}) => {
  const {category, filterLessons} = props;
  return (
    <TabBtn
      mode="contained"
      onPress={() => {
        filterLessons(category);
      }}>
      {category.title}
    </TabBtn>
  );
};
export default TabButton;
