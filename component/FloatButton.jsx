import { FAB } from 'react-native-paper';
import React, { useState } from 'react';

const FloatButton = ({ navigation }) => {
  const compliantHandler = () => navigation.navigate('Scan');
  const [FABState, setFABState] = useState(false);
  return (
    <FAB.Group
      icon="plus"
      open={FABState}
      onStateChange={() => setFABState(!FABState)}
      actions={[
        {
          icon: 'crosshairs-gps',
          label: 'Location',
          onPress: () => console.log('get location'),
        },
        {
          icon: 'star',
          label: 'Get Reward',
          onPress: () => console.log('Pressed email'),
        },
        {
          icon: 'delete-sweep',
          label: 'Complaint for the basket',
          onPress: compliantHandler,
          small: false,
        },
      ]}
    />
  );
};
export default FloatButton;
