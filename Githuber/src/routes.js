// import {StackNavigator, TabNavigator} from 'react-navigation';
// import {createAppContainer} from 'react-navigation';
import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Header from './components/header';
import {colors} from './styles';

import Welcome from './pages/welcome';
import Repositories from './pages/repositories';
import Organizations from './pages/organizations';

const Routes = (userExists = false) =>
  createStackNavigator(
    {
      Welcome: {screen: Welcome},
      User: {
        navigationOptions: () => ({
          header: props => <Header {...props} />,
        }),
        screen: createMaterialTopTabNavigator(
          {
            Repositories: {screen: Repositories},
            Organizations: {screen: Organizations},
          },
          {
            tabBarOptions: {
              indicatorStyle: {
                opacity: 0,
                backgroundColor: '#fff',
              },
              activeTintColor: colors.white,
              inactiveTintColor: colors.inactive,
              style: {
                backgroundColor: colors.primary,
              },
              showIcon: true,
              showLabel: false,
              swipeEnabled: true,
            },
            tabBarPosition: 'bottom',
          },
        ),
      },
    },
    {
      initialRouteName: userExists ? 'User' : 'Welcome',
    },
  );

export default Routes;
