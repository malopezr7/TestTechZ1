import React, {useEffect, useState} from 'react';
import {ApolloError, useQuery} from '@apollo/client';
import {ActivityIndicator, View, Text} from 'react-native';
import {GET_ALL_LESSONS} from '../operations/queries/getAllLessons';
import {GetAllLessons} from '../operations/queries/types/GetAllLessons';
import MainSection from '../components/MainSection';
import {Lessons} from '../models/Lessons';
import {Category} from '../models/Category';

export default function Main() {
  const {
    loading: isLessonsLoading,
    data: lessonsConnection,
    error: lessonsError,
  } = useQuery<GetAllLessons>(GET_ALL_LESSONS);
  const [lessons, setLessons] = useState<Lessons>([]);
  const [filteredLessons, setFilteredLessons] = useState<Lessons>([]);
  const [error, setError] = useState<ApolloError | undefined>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(isLessonsLoading);
    if (lessonsError) {
      setError(lessonsError);
    }
    setLessons(lessonsConnection?.items as Lessons);
    setFilteredLessons(lessonsConnection?.items as Lessons);
  }, [isLessonsLoading, lessonsConnection, lessonsError]);

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return (
      <View>
        <Text>An error occurred {JSON.stringify(error)}</Text>
      </View>
    );
  }
  const filterByCategory = (category: Category) => {
    console.log(lessons);
    setFilteredLessons(
      category.title === 'all'
        ? lessons
        : lessons?.filter(lesson => lesson.category.id === category.id),
    );
  };

  return (
    <MainSection
      lessons={lessons as Lessons}
      filteredLessons={filteredLessons as Lessons}
      filterLessons={filterByCategory}
    />
  );
}
