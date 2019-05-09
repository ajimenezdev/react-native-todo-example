import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
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
  },
  text: {
    width: "80%",
    borderBottomWidth: 1,
    padding: 5
  }
});

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodo: null
    };
  }

  componentDidMount = () => {
    const todos = getTodos();
    this.setState({ todos });
  };

  render() {
    const { todos, newTodo } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo List App</Text>
        <TextInput
          style={styles.text}
          placeholder="Nuevo TODO"
          value={newTodo}
          onChangeText={todo => this.setState({ newTodo: todo })}
          autoCapitalize="words"
          clearButtonMode="always"
          returnKeyType="done"
          selectionColor="#FF5722"
        />
        <Text>{newTodo}</Text>
        <TodoList todos={todos} />
      </View>
    );
  }
}

export default MainScreen;
