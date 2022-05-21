import React from 'react';
import LessonsList from '../components/LessonsList';
import {Lessons} from '../models/Lessons';

export default function Main(props: {lessons: Lessons}) {
  const {lessons} = props;
  return <LessonsList lessons={lessons} />;
}
