import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    margin: 5,
    padding: 5,
    width: "80%",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    marginLeft: 5,
    fontWeight: "bold"
  },
  textDone: {
    color: "#aaa",
    textDecorationLine: "line-through",
    fontWeight: "normal"
  }
});

const TaskList = ({ todos }) => (
  <Fragment>
    {todos.map(todo => (
      <View key={todo.text} style={styles.listItem}>
        <Text>-</Text>
        <Text style={[styles.text, todo.done && styles.textDone]}>
          {todo.text}
        </Text>
      </View>
    ))}
  </Fragment>
);

export default TaskList;
