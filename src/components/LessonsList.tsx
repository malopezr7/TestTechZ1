import React, {Fragment} from 'react';
import {FlatList} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';
import {Lessons} from '../models/Lessons';

const LessonsList = (props: {lessons: Lessons}) => {
  const {lessons} = props;
  return (
    <Fragment>
      <Title>Elementos: {lessons.length}</Title>
      <FlatList
        data={lessons}
        renderItem={item => (
          <Card
            style={{
              marginVertical: 10,
              marginHorizontal: 10,
            }}>
            <Card.Cover source={{uri: item.item.image}} />
            <Card.Title title={item.item.title} />
            <Card.Content>
              <Paragraph numberOfLines={3}>{item.item.image}</Paragraph>
              <Paragraph numberOfLines={3}>{item.item.content}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </Fragment>
  );
};

export default LessonsList;
