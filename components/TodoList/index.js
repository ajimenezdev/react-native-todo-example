import React, { Fragment } from "react";
import { Text, View } from "react-native";

const TaskList = ({ todos }) => (
  <Fragment>
    {todos.map(
      todo => !todo.done && <Text key={todo.text}>- {todo.text}</Text>
    )}
  </Fragment>
);

export default TaskList;
