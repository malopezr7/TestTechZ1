import {gql} from '@apollo/client';

export const ItemsQuery = gql`
  query Items {
    items {
      content
      image
      title
      id
    }
  }
`;
