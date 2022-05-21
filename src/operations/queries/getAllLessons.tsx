import {gql} from '@apollo/client';

export const GET_ALL_LESSONS = gql`
  query GetAllLessons {
    items {
      ...LessonFragment
      category {
        ...CategoryFragment
      }
    }
  }

  fragment LessonFragment on Lesson {
    author
    content
    id
    image
    title
  }

  fragment CategoryFragment on Category {
    id
    title
  }
`;
