import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import TabBar from '../../containers/TabBar';
import LessonsList from '../../containers/LessonsList';
import {Lessons} from '../../models/Lessons';

const MainSection = (props: {
  lessons: Lessons;
  filteredLessons: Lessons;
  filterLessons: any;
}) => {
  const {lessons, filteredLessons, filterLessons} = props;
  return (
    <View>
      <TabBar lessons={lessons} filterLessons={filterLessons} />
      <LessonsList lessons={filteredLessons} />
    </View>
  );
};

MainSection.propTypes = {
  lessons: PropTypes.array.isRequired,
};
export default MainSection;
