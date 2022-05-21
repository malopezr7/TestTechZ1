import React, {Component} from 'react';
import {ApolloProvider} from '@apollo/client';
import {client} from './utils/Client';
import Home from './components/Home';

export class app extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );
  }
}

export default app;
