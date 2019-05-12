import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import saveImage from "todoList/assets/save.png";
import BasicAddItems from "todoList/components/BasicAddItems";

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    tintColor: "#fff",
    marginRight: 20
  }
});

class EditTodo extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Edit ToDo",
    headerRight: (
      <TouchableOpacity
        onPress={() => {
          navigation.getParam("onSave")(navigation.getParam("updatedTodo"));
          navigation.goBack();
        }}
      >
        <Image style={styles.icon} source={saveImage} />
      </TouchableOpacity>
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      todo: props.navigation.getParam("todo")
    };
  }

  componentDidMount = async () => {
    this.props.navigation.setParams({
      updatedTodo: this.state.todo
    });
  };

  updateLocalTodo = property => {
    const newTodo = { ...this.state.todo, ...property };
    this.setState({ todo: newTodo });
    this.props.navigation.setParams({
      updatedTodo: newTodo
    });
  };

  render() {
    const { todo } = this.state;
    const { text, description, priority } = todo;
    return (
      <View>
        <BasicAddItems
          text={text}
          description={description}
          priority={priority}
          onChange={property => this.updateLocalTodo(property)}
        />
      </View>
    );
  }
}

export default EditTodo;
