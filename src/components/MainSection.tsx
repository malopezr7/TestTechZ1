import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import TabBar from '../containers/TabBar';
import {Lessons} from '../models/Lessons';

const MainSection = (props: {lessons: Lessons}) => (
  <View>
    <TabBar lessons={props.lessons} />
  </View>
);

MainSection.propTypes = {
  lessons: PropTypes.array.isRequired,
};
export default MainSection;
