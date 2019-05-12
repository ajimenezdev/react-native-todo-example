import React, { Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  contentContainer: {
    flexGrow: 1
  },
  listItem: {
    margin: 5,
    padding: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  bullet: {
    width: "10%"
  },
  text: {
    flex: 1,
    marginLeft: 5,
    fontWeight: "bold"
  },
  textDone: {
    color: "#aaa",
    textDecorationLine: "line-through",
    fontWeight: "normal"
  },
  delete: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center"
  },
  deleteText: {
    color: "#ff0000",
    fontSize: 18
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const TaskList = ({ todos, onUpdate, onDelete }) => {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderItem = todo => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => onUpdate({ ...todo, done: !todo.done })}
    >
      <Text style={styles.bullet}>-</Text>
      <Text style={[styles.text, todo.done && styles.textDone]}>
        {todo.text}
      </Text>
      <TouchableOpacity style={styles.delete} onPress={() => onDelete(todo)}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  renderEmptyComponent = () => (
    <View style={styles.emptyList}>
      <Text>Lista Vacia</Text>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={todos}
      keyExtractor={todo => todo.id}
      renderItem={({ item }) => renderItem(item)}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderEmptyComponent}
    />
  );
};

export default TaskList;
