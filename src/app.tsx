import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Index from './Index';
import LessonInfo from './screens/LessonInfo/LessonInfo';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './utils/params/RootStackParams';

const Stack = createStackNavigator<RootStackParamList>();
export class app extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Index}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Info" component={LessonInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default app;
