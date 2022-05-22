import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {Fragment} from 'react';
import {Lesson, Lessons} from '../../models/Lessons';
import {RootStackParamList} from '../../utils/params/RootStackParams';
import {LessonTitle} from './LessonsList.styles';
import LessonItem from './LessonCard/LessonItem';
import {FlatList} from 'react-native';

type listScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
const LessonsList = (props: {lessons: Lessons}) => {
  const {lessons} = props;
  const navigation = useNavigation<listScreenProp>();

  const renderItem = (item: {item: Lesson}) => (
    <LessonItem item={item.item} navigation={navigation} />
  );
  return (
    <Fragment>
      <LessonTitle>Elementos: {lessons.length}</LessonTitle>
      <FlatList
        removeClippedSubviews
        initialNumToRender={5}
        data={lessons}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item: Lesson) => item.id}
      />
    </Fragment>
  );
};

export default LessonsList;
