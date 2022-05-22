import React from 'react';
import {Card, Paragraph} from 'react-native-paper';
import {Lesson} from '../../../models/Lessons';
import LessonImage from '../../Image/LessonImage';
import {LessonCard} from './LessonItem.styles';

const LessonItem = (props: {item: Lesson; navigation: any}) => {
  const {item, navigation} = props;
  return (
    <LessonCard onPress={() => navigation.navigate('Info', {lesson: item})}>
      <LessonImage source={item.image + '?i=' + item.id} />
      <Card.Title title={item.title} />
      <Card.Content>
        <Paragraph numberOfLines={3}>{item.author}</Paragraph>
        <Paragraph numberOfLines={3}>{item.content}</Paragraph>
      </Card.Content>
    </LessonCard>
  );
};

export default LessonItem;
