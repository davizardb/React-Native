import './config/ReactotronConfig';

import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Routes from './routes';
import {createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';

export default class App extends Component {
  state = {
    userExists: false,
    userChecked: false,
  };

  UNSAFE_componentWillMount() {
    AsyncStorage.clear();
    this.checkUser().then(response => {
      this.setState({userExists: response, userChecked: true});
    });
  }

  checkUser = async () => {
    const user = await AsyncStorage.getItem('@Githuber:username');

    return user !== null;
  };

  render() {
    const {userChecked, userExists} = this.state;

    if (!userChecked) {
      return null;
    }

    const Layout = createAppContainer(Routes(userExists));
    return <Layout />;
  }
}
