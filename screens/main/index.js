import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const todos = [
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

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text selectable>Todo List App</Text>
        {todos.map(todo => !todo.done && <Text>{todo.text}</Text>)}
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

export default MainScreen;
