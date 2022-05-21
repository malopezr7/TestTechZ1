import {Category} from '../../../models/Category';

export interface GetAllLessons_items {
  __typename: 'Lesson';
  id: string;
  author: string;
  content: string;
  title: string;
  image: string;
  category: Category;
}
export interface GetAllLessons {
  items: GetAllLessons_items[];
}
