import uuid from "uuid/v1";
import { AsyncStorage } from "react-native";

const TODOS_KEY = "@MyStore:todos";

const getTodos = async () => {
  let todos = [];
  try {
    todos = await AsyncStorage.getItem(TODOS_KEY);
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
  return JSON.parse(todos);
};

const newTodo = todo => ({
  id: uuid(),
  ...todo,
  createdAt: new Date()
});

const updateTodo = (list, todo) => {
  const updateIndex = list.findIndex(t => t.id === todo.id);
  const newTodoList = [...list];
  newTodoList[updateIndex] = todo;
  saveTodos(newTodoList);
  return newTodoList;
};

const addTodo = (list, todo) => {
  const newTodoList = [...(list || []), newTodo(todo)];
  saveTodos(newTodoList);
  return newTodoList;
};

const deleteTodo = (list, todo) => list.filter(t => t.id !== todo.id);

const saveTodos = async todos => {
  try {
    const resp = await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
};

export { getTodos, addTodo, updateTodo, deleteTodo };
