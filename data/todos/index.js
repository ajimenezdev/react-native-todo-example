import uuid from "uuid/v1";

const getTodos = () => [
  newTodo({
    text: "Test",
    done: true
  }),
  newTodo({
    text: "Tarea 1",
    done: false
  }),
  newTodo({
    text: "Tarea 2",
    done: false
  }),
  newTodo({
    text: "Tarea 3",
    done: false
  }),
  newTodo({
    text: "Tarea 4",
    done: false
  }),
  newTodo({
    text: "Nueva",
    done: false
  })
];

const newTodo = todo => ({
  id: uuid(),
  text: todo.text,
  createdAt: new Date(),
  done: todo.done
});

const updateTodo = (list, todo) => {
  const updateIndex = list.findIndex(t => t.id === todo.id);
  const newTodoList = [...list];
  newTodoList[updateIndex] = todo;
  return newTodoList;
};

const addTodo = (list, todo) => [...(list || []), newTodo(todo)];

const deleteTodo = (list, todo) => list.filter(t => t.id !== todo.id);

export { getTodos, addTodo, updateTodo, deleteTodo };
