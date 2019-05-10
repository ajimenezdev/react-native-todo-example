import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import TodoList from "todoList/components/TodoList";
import { getTodos, addTodo, updateTodo, deleteTodo } from "todoList/data/todos";

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
  addRow: {
    flexDirection: "row",
    width: "80%"
  },
  text: {
    flex: 1,
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

  handleAdd = () => {
    const { todos, newTodo } = this.state;
    const newList = addTodo(todos, { text: newTodo });
    this.setState({ todos: newList, newTodo: null });
  };

  handleUpdate = todo => {
    const { todos } = this.state;
    const newList = updateTodo(todos, todo);
    this.setState({ todos: newList });
  };

  handleDelete = todo => {
    const { todos } = this.state;
    const newList = deleteTodo(todos, todo);
    this.setState({ todos: newList });
  };

  render() {
    const { todos, newTodo } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo List App</Text>
        <View style={styles.addRow}>
          <TextInput
            style={styles.text}
            placeholder="Nuevo TODO"
            value={newTodo}
            onChangeText={todo => this.setState({ newTodo: todo })}
            autoCapitalize="words"
            clearButtonMode="always"
            returnKeyType="done"
            selectionColor="#FF5722"
            onSubmitEditing={this.handleAdd}
          />
          <Button title="Añadir" onPress={this.handleAdd} disabled={!newTodo} />
        </View>
        <TodoList
          todos={todos}
          onUpdate={this.handleUpdate}
          onDelete={this.handleDelete}
        />
      </View>
    );
  }
}

export default MainScreen;
