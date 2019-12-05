if (__DEV__) {
  import('./config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import Todo from './components/Todo';

export default class App extends Component {
  state = {
    usuario: 'Davo',
    todos: [{id: 0, text: 'Fazer café'}, {id: 1, text: 'Estudar o GoNative'}],
  };
  componentDidMount() {
    console.tron.log('Teste');
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, {id: Math.random(), text: 'Chupa meu ovo'}],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Todo title="fazer cafe" />
        <Todo title="estudar o gonative" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f44c7f',
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
