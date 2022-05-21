import React from 'react';
import {Categories, Category} from '../models/Category';
import {Lessons} from '../models/Lessons';
import TabBar from '../components/TabBar';

interface TabBarProps {
  lessons: Lessons;
}
export default function Main({lessons}: TabBarProps) {
  const allCategory: Category = {id: 'all', displayName: 'all'} as Category;
  let categories: Categories = lessons.map(t => t.category) as Categories;
  categories.unshift(allCategory);

  return <TabBar categories={categories} />;
}
