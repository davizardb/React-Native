import React, { Component } from 'react';
import './config/ReactotronConfig';
import './config/DevToolsConfig';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Post from './components/Post';

export default class App extends Component {
state = {
  posts: [
    {
      id: 1,
      titulo: 'Aprendendo React Native',
      autor: 'Davo Mikkilsen Banderas',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      titulo: 'Aprendendo React Native',
      autor: 'Davo Mikkilsen Banderas',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      titulo: '199',
      autor: 'Davo Mikkilsen Banderas',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 4,
      titulo: 'Esquecendo o React Native',
      autor: 'Davo Mikkilsen Banderas',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ],
};

render() {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.header}>
        <Text style={styles.text}>Go Native App</Text>
      </View>
      <View style={styles.container}>
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </View>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#f44c7f',
  },
  header: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});
