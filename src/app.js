/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Item from './components/Item';
import {client} from './graphql/Client';
import {ItemsQuery} from './graphql/Queries';

export default class App extends Component {
  requestHeadlines = () => {
    client
      .query({
        query: ItemsQuery,
      })
      .then(response => {
        console.log('RESPONSE ==>', response.data.items);
        this.setState({
          loading: response.loading,
          items: response.data.items,
        });
      })
      .catch(error => {
        console.log('ERROR ==>', error);
      });
  };
  state = {
    loading: true,
    items: [],
  };
  componentDidMount() {
    this.requestHeadlines();
  }
  render() {
    const {loading} = this.state;
    const {items} = this.state;
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
          <Text style={styles.headerText}>Lista items</Text>
        </View>
        <View style={styles.contentContainer}>
          <FlatList
            data={items}
            renderItem={({item}) => <Item {...item} />}
            keyExtractor={item => item.id}
          />
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
  },
});
