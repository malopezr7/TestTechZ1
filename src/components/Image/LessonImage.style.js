import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const ImageStyle = styled(FastImage)`
  width: ${props => props.width}px;
  height: 200px;
`;
