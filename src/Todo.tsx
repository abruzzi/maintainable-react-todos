import { useState } from "react";
import { TodoType } from "./types";
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onItemAdded = (todo: TodoType) => {
    setTodos([todo, ...todos]);
  };

  const onToggleItem = (todo: TodoType) => {
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        return ({...item, completed: !item.completed})
      }
      return item;
    }))
  }

  return (
    <div>
      <h2>todos</h2>
      <TodoInput onItemAdded={onItemAdded} />
      <TodoList todos={todos} onToggleItem={onToggleItem} />
    </div>
  );
};

export { Todo };
