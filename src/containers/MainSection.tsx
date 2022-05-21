import React from 'react';
import {useQuery} from '@apollo/client';
import {ActivityIndicator, View, Text} from 'react-native';
import {GET_ALL_LESSONS} from '../operations/queries/getAllLessons';
import {GetAllLessons} from '../operations/queries/types/GetAllLessons';
import MainSection from '../components/MainSection';
import {Lessons} from '../models/Lessons';

export default function Main() {
  const {
    loading: isLessonsLoading,
    data: lessonsConnection,
    error: lessonsError,
  } = useQuery<GetAllLessons>(GET_ALL_LESSONS);

  if (isLessonsLoading) {
    return <ActivityIndicator />;
  }
  if (lessonsError) {
    return (
      <View>
        <Text>An error occurred {JSON.stringify(lessonsError)}</Text>
      </View>
    );
  }
  const lessons = lessonsConnection?.items;

  return <MainSection lessons={lessons as Lessons} />;
}
