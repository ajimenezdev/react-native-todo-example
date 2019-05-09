import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "todoList/components/TodoList";
import { getTodos } from "todoList/data/todos";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 40
  },
  title: {
    fontWeight: "bold",
    fontSize: 20
  }
});

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentDidMount = () => {
    const todos = getTodos();
    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo List App</Text>
        <TodoList todos={todos} />
      </View>
    );
  }
}

export default MainScreen;
