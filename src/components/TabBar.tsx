import React from 'react';
import PropTypes from 'prop-types';
import Category from '../models/Category';
import {FlatList, ScrollView, View, Text} from 'react-native';

const TabBar = ({categories}: any) => <Text>{categories.length}</Text>;

export default TabBar;
