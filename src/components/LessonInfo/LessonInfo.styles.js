import styled from 'styled-components/native';
import {View} from 'react-native';
export const Container = styled(View)`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: rgba(0, 0, 0, 0.7);
  padding-top: 48px;
  padding-bottom: 100px;
`;
export const Text = styled.Text`
  margin-top: 10px;
  color: white;
`;
export const Title = styled(Text)`
  text-align: center;
  font-size: 40px;
`;

export const ScrollView = styled.ScrollView`
  margin: 24px;
`;

export const Image = styled.Image`
  width: ${props => props.width - 48}px;
  height: 300px;
  margin: 0 12px;
`;
export const GoBackButton = styled.TouchableOpacity`
  width: 100%;
`;
export const GoBackText = styled.Text`
  color: aliceblue;
  font-size: 28px;
  text-align: center;
`;
