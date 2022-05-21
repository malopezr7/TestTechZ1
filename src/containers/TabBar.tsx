import React from 'react';
import {Categories, Category} from '../models/Category';
import {Lesson, Lessons} from '../models/Lessons';
import TabBar from '../components/TabBar';

export default function Main(props: {lessons: Lessons; filterLessons: any}) {
  const {lessons, filterLessons} = props;
  function onlyUnique(value: Lesson, index: any, self: Lessons) {
    return self.findIndex(t => t.category.id === value.category.id) === index;
  }
  const allCategory: Category = {id: 'all', title: 'all'} as Category;
  let categories: Categories = lessons
    .filter(onlyUnique)
    .map(t => t.category) as Categories;
  categories.unshift(allCategory);

  return <TabBar categories={categories} filterLessons={filterLessons} />;
}
