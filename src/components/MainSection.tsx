import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import TabBar from '../containers/TabBar';
import {Lessons} from '../models/Lessons';

interface MainSectionProps {
  lessons: Lessons;
}

const MainSection = ({lessons}: MainSectionProps) => (
  <View>
    <TabBar lessons={lessons} />
  </View>
);

MainSection.propTypes = {
  lessons: PropTypes.object.isRequired,
};
export default MainSection;
