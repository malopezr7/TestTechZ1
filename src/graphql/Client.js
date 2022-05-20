import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({uri: 'https://tech.z1.digital/graphql'}),
  cache: new InMemoryCache(),
});
