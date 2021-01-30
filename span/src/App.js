import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';

const initialState = {
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  defaultColor: '#000',
  signal: false,
  letter: '',
  colorful: {},
};

export default class App extends Component {
  state = {
    ...initialState,
  };

  toColor = () => {
    if (this.state.letter === '') {
      Alert.alert('Digite uma letra por favor');
      this.setState({...initialState});
    }
    const text = this.state.text;
    let aux = [];
    const notBlack =
      this.state.defaultColor === '#000'
        ? '#' +
          (
            '000000' + Math.random().toString(16).slice(2, 8).toUpperCase()
          ).slice(-6)
        : null;
    [...text].forEach((char, index) => {
      if (char.toString().toLowerCase() === this.state.letter.toLowerCase()) {
        return aux.push(
          <Text
            key={index}
            style={{
              color: notBlack,
            }}>
            {char === this.state.letter
              ? this.state.letter
              : this.state.letter.toLowerCase()}
          </Text>,
        );
      } else {
        return aux.push(<Text key={index}>{char}</Text>);
      }
    });
    this.setState({colorful: aux});
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
          {this.state.signal
            ? this.state.colorful !== {}
              ? this.state.colorful.map((element) => element)
              : null
            : this.state.text}
        </Text>
        <View>
          <Text style={styles.inputText}>Digite uma letra</Text>
          <TextInput
            textContentType="name"
            maxLength={1}
            style={styles.input}
            value={this.state.letter}
            onChangeText={(letter) => {
              var letters = /^[a-z]*$/i;
              if (!letter.match(letters)) {
                Alert.alert('Digite uma letra por favor');
                this.setState({...initialState});
              } else {
                this.setState({...initialState});
                this.setState({letter});
              }
            }}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            onPress={() => {
              this.setState({signal: true}, this.toColor());
            }}>
            <Text style={styles.buttonText}>Mudar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  button: {
    width: 90,
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    margin: 30,
    opacity: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    padding: 40,
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
  },
  input: {
    width: 70,
    backgroundColor: '#ccc',
    borderRadius: 5,
    alignSelf: 'center',
  },
  inputText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
});
