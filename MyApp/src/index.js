import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen
            name="User"
            component={User}
            options={{
              title: 'Usuários',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
