import { TodoType } from "./types";

export const TodoList = ({
  todos,
  onToggleItem,
  onDeleteItem,
}: {
  todos: TodoType[];
  onToggleItem: (todo: TodoType) => void;
  onDeleteItem: (todo: TodoType) => void;
}) => {
  return (
    <>
      {todos.map((todo) => (
        <div
          className="todo-item"
          key={todo.id}
          data-testid="todo-item"
        >
          <span data-completed={todo.completed} onClick={() => onToggleItem(todo)}>{todo.content}</span>
          <button data-testid="delete-button" onClick={() => onDeleteItem(todo)}>Delete</button>
        </div>
      ))}
    </>
  );
};
