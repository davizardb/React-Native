import React, {Component} from 'react';
import {NavigationActions, StackActions} from 'react-navigation';
import PropTypes from 'prop-types';
import Emoji from 'react-native-emoji';
import api from 'services/api';
import AsyncStorage from '@react-native-community/async-storage';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import styles from './styles';

export default class welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
    loading: false,
    errorMessage: null,
  };

  checkUserExists = async username => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  saveUser = async username => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  signIn = async () => {
    const {username} = this.state;

    if (username.length === 0) {
      return;
    }

    this.setState({loading: true});

    try {
      await this.checkUserExists(username);

      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'User'})],
      });
      this.props.navigation.dispatch(resetAction);
    } catch (err) {
      this.setState({loading: false, errorMessage: 'Usuário não existe'});
    }
  };
  // StatusBar.setBarStyle("light-content");
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem-Vindo</Text>
        <Text style={styles.text}>
          Para continuar, precisamos que você informe seu usuário no Github
        </Text>

        {!!this.state.errorMessage && (
          <Text style={styles.error}>{this.state.errorMessage}</Text>
        )}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="rgba(0,0,0,0)"
            value={this.state.username}
            onChangeText={username => {
              this.setState({username});
            }}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {this.state.loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>
                Prosseguir
                <Text>{'  '}</Text>
                <Emoji name="computer" style={{fontSize: 20}} />
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
