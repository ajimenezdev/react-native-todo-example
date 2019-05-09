import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const tasks = [
  {
    text: "Tarea 1",
    done: false
  },
  {
    text: "Tarea 2",
    done: false
  },
  {
    text: "Tarea 3",
    done: false
  },
  {
    text: "Tarea 4",
    done: false
  },
  {
    text: "Nueva",
    done: false
  }
];

class TodoList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text selectable>Todo List App</Text>
        {tasks.map(task => !task.done && <Text>{task.text}</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default TodoList;
