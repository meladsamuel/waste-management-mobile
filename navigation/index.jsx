import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Complaint from '../screens/compliant';
import Home from '../screens/Home';
import Login from '../screens/login';
import Scanner from '../screens/scan.jsx';
import { Appbar } from 'react-native-paper';

const Stack = createStackNavigator();

function CustomNavigationBar({ previous, navigation, scene }) {
  return (
    <Appbar.Header>
      {previous ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action icon="menu" />
      )}
      <Appbar.Content title={scene.route.name} />
      <Appbar.Action icon="magnify" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
}

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
      }}
    >
      <Stack.Screen name="Map" component={Home} />
      <Stack.Screen name="Scan" component={Scanner} />
      <Stack.Screen name="Compliant" component={Complaint} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default Navigator;
