import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Dimensions} from 'react-native';
import {RootStackParamList} from '../../utils/params/RootStackParams';
import {RouteProp} from '@react-navigation/native';
import {
  Container,
  ScrollView,
  Text,
  GoBackText,
  GoBackButton,
  Title,
} from './LessonInfo.styles';
import LessonImage from '../../components/Image/LessonImage';

export interface InfoScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Info'>;
  route: RouteProp<RootStackParamList, 'Info'>;
}
const LessonInfo: React.FC<InfoScreenProps> = ({navigation, route}) => {
  const screen = Dimensions.get('window');
  const {
    params: {lesson},
  } = route;

  return (
    <>
      <Container width={screen.width} height={screen.height}>
        <Title>{lesson.title}</Title>

        <ScrollView>
          <LessonImage source={lesson.image + '?i=' + lesson.id} />
          <Text>{lesson.content}</Text>
        </ScrollView>

        <GoBackButton
          onPress={() => {
            return navigation.goBack();
          }}>
          <GoBackText>Go Back</GoBackText>
        </GoBackButton>
      </Container>
    </>
  );
};

export default LessonInfo;
