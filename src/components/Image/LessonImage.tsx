import React from 'react';
import {Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ImageStyle} from './LessonImage.style';

const LessonImage = (props: {source: string}) => {
  const {source} = props;

  const screen = Dimensions.get('window');
  return (
    <ImageStyle
      resizeMode={FastImage.resizeMode.cover}
      width={screen.width - 20}
      source={{
        uri: source,
        priority: FastImage.priority.normal,
      }}
    />
  );
};

export default LessonImage;
