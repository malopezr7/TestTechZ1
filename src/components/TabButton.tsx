import * as React from 'react';
import {Button} from 'react-native-paper';

const TabButton = (props: {text: string}) => {
  const {text} = props;
  return (
    <Button
      style={{
        fontSize: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }}
      mode="contained"
      onPress={() => console.log('Pressed')}>
      {text}
    </Button>
  );
};
export default TabButton;
