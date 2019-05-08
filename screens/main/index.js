import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class TodoList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text selectable>Todo List App</Text>
        <Text>Tarea 1</Text>
        <Text>Tarea 2</Text>
        <Text>Tarea multiples {"\n"} lineas</Text>
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
