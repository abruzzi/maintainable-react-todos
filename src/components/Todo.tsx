import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";

import "./Todo.css";
import { useTodos } from "../hooks/useTodos";
import { TodoType } from "../types";
import { Aggregation } from "./Aggregation";
import { SearchInput } from "./SearchInput";

const Todo = ({ items }: { items?: TodoType[] }) => {
  const {
    displayTodos,
    aggregation,
    addTodo,
    deleteTodo,
    toggleTodo,
    switchCategory,
    search,
  } = useTodos(items);

  return (
    <div className="todo-container">
      <h1>todos</h1>
      <TodoInput onItemAdded={addTodo} />
      <Aggregation aggregation={aggregation} switchCategory={switchCategory} />
      <TodoList
        todos={displayTodos}
        onToggleItem={toggleTodo}
        onDeleteItem={deleteTodo}
      />
      <SearchInput performSearch={search} />
    </div>
  );
};

export { Todo };
