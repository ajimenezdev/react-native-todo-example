import React, { Fragment } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

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
    flex: 4,
    marginLeft: 5,
    fontWeight: "bold"
  },
  textDone: {
    color: "#aaa",
    textDecorationLine: "line-through",
    fontWeight: "normal"
  },
  delete: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center"
  },
  deleteText: {
    color: "#ff0000",
    fontSize: 18
  }
});

const TaskList = ({ todos, onUpdate, onDelete }) => (
  <Fragment>
    {todos.map(todo => (
      <TouchableOpacity
        key={todo.id}
        style={styles.listItem}
        onPress={() => onUpdate({ ...todo, done: !todo.done })}
      >
        <Text style={styles.bullet}>-</Text>
        <Text style={[styles.text, todo.done && styles.textDone]}>
          {todo.text}
        </Text>
        <TouchableOpacity style={styles.delete} onPress={() => onDelete(todo)}>
          <Text style={styles.deleteText}>X</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    ))}
  </Fragment>
);

export default TaskList;
