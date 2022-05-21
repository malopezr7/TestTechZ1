import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';
import {RootStackParamList} from './RootStackParams';
import {RouteProp} from '@react-navigation/native';

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
      <View>
        <View
          style={{
            width: screen.width,
            height: screen.height,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            paddingTop: 48,
            paddingBottom: 100,
          }}>
          <Text style={{textAlign: 'center', fontSize: 40, color: '#FFF'}}>
            {lesson.title}
          </Text>

          <ScrollView style={{margin: 24}}>
            <Image
              source={{uri: lesson.image}}
              resizeMode="contain"
              style={{
                width: screen.width - 48,
                height: 300,
                marginVertical: 12,
              }}
            />
            <Text style={{color: '#fff'}}>{lesson.content}</Text>
          </ScrollView>

          <TouchableOpacity
            style={{width: '100%'}}
            onPress={() => {
              return navigation.goBack();
            }}>
            <Text
              style={{
                color: '#31AAB7',
                fontSize: 28,
                textAlign: 'center',
              }}>
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LessonInfo;
