import {Lesson} from '../../models/Lessons';

export type RootStackParamList = {
  Main: undefined;
  Info: {lesson: Lesson};
};
