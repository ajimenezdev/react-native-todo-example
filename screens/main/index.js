import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator
} from "react-native";
import TodoList from "todoList/components/TodoList";
import { getTodos, addTodo, updateTodo, deleteTodo } from "todoList/data/todos";
import AddTodo from "todoList/screens/addTodo";
import FAB from "todoList/components/FAB";

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
  loading: {
    flex: 1
  }
});

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      loading: true,
      addModalVisible: false
    };
  }

  componentDidMount = async () => {
    const todos = await getTodos();
    this.setState({ todos, loading: false });
  };

  handleAdd = todo => {
    const { todos } = this.state;
    const newList = addTodo(todos, todo);
    this.setState({ todos: newList });
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

  toggleModal = () => {
    this.setState({ addModalVisible: !this.state.addModalVisible });
  };

  render() {
    const { todos, loading, addModalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo List App</Text>
        {loading && (
          <ActivityIndicator
            style={styles.loading}
            size="large"
            color="#0066ff"
          />
        )}
        {!loading && (
          <TodoList
            todos={todos}
            onUpdate={this.handleUpdate}
            onDelete={this.handleDelete}
          />
        )}
        <AddTodo
          visible={addModalVisible}
          onCloseModal={this.toggleModal}
          onAddTodo={this.handleAdd}
        />
        <FAB
          text="+"
          fabStyle={{ backgroundColor: "#0066ff" }}
          textStyle={{ color: "#fff" }}
          onPress={this.toggleModal}
        />
      </View>
    );
  }
}

export default MainScreen;
