import React, { Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SectionList,
  Image,
  Alert
} from "react-native";
import CheckBox from "react-native-check-box";
import deleteImage from "todoList/assets/delete.png";

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
  },
  emptyImage: {
    tintColor: "#005500"
  },
  sectionHeader: {
    backgroundColor: "#ddd",
    padding: 10
  },
  icon: {
    width: 20,
    height: 20
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
      <View style={styles.bullet}>
        <CheckBox
          checkedCheckBoxColor="#aaa"
          onClick={() => {
            onUpdate({ ...todo, done: !todo.done });
          }}
          isChecked={todo.done}
        />
      </View>
      <Text style={[styles.text, todo.done && styles.textDone]}>
        {todo.text}
      </Text>
      <TouchableOpacity
        style={styles.delete}
        onPress={() => handleDelete(todo)}
      >
        {/* <Text style={styles.deleteText}>X</Text> */}
        <Image style={styles.icon} source={deleteImage} />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  renderEmptyComponent = () => (
    <View style={styles.emptyList}>
      <Image
        style={styles.emptyImage}
        source={require("todoList/assets/check.png")}
      />
      <Text>Tareas terminadas</Text>
    </View>
  );

  renderSectionHeader = ({ section: { title, data } }) => (
    <View style={styles.sectionHeader}>
      <Text>
        {title} ({data.length})
      </Text>
    </View>
  );

  getSections = () => {
    if (todos && todos.length) {
      return [
        {
          title: "ToDo",
          data: todos.filter(todo => !todo.done)
        },
        {
          title: "Terminadas",
          data: todos.filter(todo => todo.done)
        }
      ];
    }
    return [];
  };

  handleDelete = todo => {
    Alert.alert("Quieres eliminar la tarea?", todo.text, [
      {
        text: "Cancelar",
        style: "cancel"
      },
      { text: "OK", onPress: () => onDelete(todo) }
    ]);
  };

  return (
    <SectionList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      sections={getSections()}
      keyExtractor={todo => todo.id}
      renderItem={({ item }) => renderItem(item)}
      renderSectionHeader={renderSectionHeader}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderEmptyComponent}
      stickySectionHeadersEnabled={true}
    />
  );
};

export default TaskList;
