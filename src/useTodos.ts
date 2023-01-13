import {useMemo, useState} from "react";
import {TodoType} from "./types";

export const useTodos = (items: TodoType[] = []) => {
  const [todos, setTodos] = useState<TodoType[]>(items);
  const [category, setCategory] = useState<string>('total');

  const displayTodos = useMemo(() => {
    switch (category) {
      case 'total':
        return todos;
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }, [category, todos])

  const aggregation = useMemo(() => {
    return {
      total: todos.length,
      completed: todos.filter(todo => todo.completed).length,
      active: todos.filter(todo => !todo.completed).length
    }
  }, [todos])

  const addTodo = (todo: TodoType) => {
    setTodos([todo, ...todos]);
  };

  const toggleTodo = (todo: TodoType) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {...item, completed: !item.completed};
        }
        return item;
      })
    );
  };

  const deleteTodo = (todo: TodoType) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return {
    displayTodos,
    aggregation,
    addTodo,
    toggleTodo,
    deleteTodo,
    switchCategory: setCategory
  };
};