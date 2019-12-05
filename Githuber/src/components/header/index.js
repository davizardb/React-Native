import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import {colors} from '../../styles';
import PropTypes from 'prop-types';
import {NavigationActions, StackActions} from 'react-navigation';

export default class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  logout = () => {
    AsyncStorage.removeItem('@Githuber:username').then(() => {
      const {dispatch} = this.props.navigation;

      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Welcome'})],
      });
      dispatch(resetAction);
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GitHuber</Text>
        <TouchableOpacity onPress={this.logout}>
          <Icon name="sign-out" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    );
  }
}
