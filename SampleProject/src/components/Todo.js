// import React, {Component} from 'react';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Todo = ({title}) => (
  <View>
    {Platform.OS === 'ios' ? (
      <Text style={styles.text}>IOS</Text>
    ) : (
      <Text style={styles.text}>Android</Text>
    )}
  </View>
);
Todo.defaultProps = {
  title: 'Todo padrão',
};
Todo.propTypes = {
  title: PropTypes.string,
};
// render() {
//   return (

//   );
//

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        color: '#000',
        fontSize: 24,
      },
    }),
  },
});

export default Todo;
