import React, { Component } from "react";
import {
  StyleSheet,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row"
  },
  content: {
    padding: 20,
    paddingBottom: 30,
    flex: 1,
    backgroundColor: "#ffffff",
    shadowOffset: { width: 0, height: -3 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 30
    // width: 200
  },
  text: {
    borderBottomWidth: 1,
    padding: 5
  },
  closeIcon: {
    color: "#fff"
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20
  },
  block: {
    margin: 10
  }
});

const initialState = {
  text: "",
  description: "",
  priority: 2
};

class AddTodoModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState
    };
  }

  addTodo = () => {
    const { onAddTodo, onCloseModal } = this.props;
    const { text, description } = this.state;
    onAddTodo({ text, description });
    // reset initialState for next Add
    this.setState(initialState);
    onCloseModal();
  };

  render() {
    const { visible, onCloseModal } = this.props;
    const { text, priority, description } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onCloseModal}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.block}>
              <Text>Titulo</Text>
              <TextInput
                style={styles.text}
                value={text}
                onChangeText={text => this.setState({ text })}
                clearButtonMode="always"
              />
            </View>
            <View style={styles.block}>
              <Text>Descripcion</Text>
              <TextInput
                style={styles.text}
                value={description}
                onChangeText={description => this.setState({ description })}
                clearButtonMode="always"
              />
            </View>
            <View style={styles.buttonRow}>
              <Button title="Cerrar" onPress={onCloseModal} color="#ff0000" />
              <Button title="Añadir" onPress={this.addTodo} />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default AddTodoModal;
