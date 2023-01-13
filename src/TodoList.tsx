import {TodoType} from "./types";

export const TodoList = ({todos, onToggleItem}: { todos: TodoType[], onToggleItem: (todo:TodoType) => void }) => {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} data-completed={todo.completed} onClick={() => onToggleItem(todo)}>{todo.content}</div>
      ))}
    </>
  );
};