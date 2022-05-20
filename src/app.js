/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {client} from './graphql/Client';
import {ItemsQuery} from './graphql/Queries';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    loading: true,
  };
  componentDidMount() {
    console.log('gola');
    this.requestHeadlines();
  }
  requestHeadlines = () => {
    client
      .query({
        query: ItemsQuery,
      })
      .then(response => {
        console.log('RESPONSE ==>', response);
        this.setState({loading: response.loading});
      })
      .catch(error => {
        console.log('ERROR ==>', error);
      });
  };
  render() {
    const {loading} = this.state;
    if (loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Headlines App</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerText: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold',
  },
  contentContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
