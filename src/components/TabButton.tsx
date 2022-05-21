import * as React from 'react';
import {Button} from 'react-native-paper';
import {Category} from '../models/Category';

const TabButton = (props: {category: Category; filterLessons: any}) => {
  const {category, filterLessons} = props;
  return (
    <Button
      style={{
        fontSize: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }}
      mode="contained"
      onPress={() => {
        filterLessons(category);
      }}>
      {category.title}
    </Button>
  );
};
export default TabButton;
