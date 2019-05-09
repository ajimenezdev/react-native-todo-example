import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "todoList/components/TodoList";
import { getTodos } from "todoList/data/todos";

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
        <Text selectable>Todo List App</Text>
        <TodoList todos={todos} />
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
