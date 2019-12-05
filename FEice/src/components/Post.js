import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'flex-start',
  },
  titulo: {
    color: '#000',
    fontWeight: '600',
    fontSize: 20,
    paddingBottom: 10,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  autor: {
    color: '#999',
    fontSize: 15,
  },
  hr: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
    margin: 5,
    width: '100%',
  },
  texto: {
    marginTop: 10,
    padding: 5,
    textAlign: 'left',
  },
});

const Post = ({ data }) => (
  <View style={styles.postContainer}>
    <Text style={styles.titulo}>{data.titulo}</Text>
    <Text style={styles.autor}>{data.autor}</Text>
    <View style={styles.hr} />
    <Text style={styles.texto}>{data.texto}</Text>
  </View>
);

Post.PropTypes = {
  data: PropTypes.shape({
    titulo: PropTypes.string,
    autor: PropTypes.string,
    texto: PropTypes.string,
  }).isRequired,
};

export default Post;
