import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// import { Container } from './styles';

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    elevation: 3,
  },
});

export default GoalItem;
