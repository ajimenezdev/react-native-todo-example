import uuid from "uuid/v1";

const delay = ms => new Promise(res => setTimeout(res, ms));

const getTodos = async () => {
  await delay(1000);
  return [
    newTodo({
      text: "Test",
      priority: 2,
      done: true
    }),
    newTodo({
      text: "Tarea 1",
      priority: 2,
      done: false
    }),
    newTodo({
      text: "Tarea 2",
      priority: 2,
      done: false
    }),
    newTodo({
      text: "Tarea 3",
      priority: 2,
      done: false
    }),
    newTodo({
      text: "Tarea 4",
      priority: 2,
      done: false
    }),
    newTodo({
      text: "Nueva",
      priority: 2,
      done: false
    })
  ];
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
  return newTodoList;
};

const addTodo = (list, todo) => [...(list || []), newTodo(todo)];

const deleteTodo = (list, todo) => list.filter(t => t.id !== todo.id);

export { getTodos, addTodo, updateTodo, deleteTodo };
