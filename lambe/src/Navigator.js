import React from 'react'
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Splash from './screens/Splash'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

const authRouter = createStackNavigator({
  Login: { screen: Login, navigationOptions: {title: 'Login'} },
  Register: { screen: Register, navigationOptions: {title: 'Register'} }
},{
  initalRouteName: 'Login'
})

const loginOrProfileRouter = createSwitchNavigator({
  Auth: authRouter,
  Profile: Profile,
}, {
    initalRouteName: 'Auth'
})

const MenuRoutes = {
  Feed: {
    name: 'Feed',
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
      tabBarIcon: ({tintColor}) => <Icon name='home' size={30} color={tintColor}/>
    }
  },
  Add: {
    name: 'AddPhoto',
    screen: AddPhoto,
    navigationOptions: {
      title: 'Add Picture',
      tabBarIcon: ({tintColor}) => <Icon name='camera' size={30} color={tintColor}/>
    }
  },
  Profile: {
    name: 'Profile',
    screen: loginOrProfileRouter,
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: ({tintColor}) => <Icon name='user' size={30} color={tintColor}/>
    }
  }
}

const MenuConfig = {
  initalRouteName: 'Feed',
  tabBarOptions: {
    showLabel: false,
  }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

const SplashRouter = createSwitchNavigator({
  Splash: Splash,
  App: MenuNavigator,
}, {
  initalRouteName: 'Splash'
})

export default SplashRouter