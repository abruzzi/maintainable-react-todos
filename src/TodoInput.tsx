import { TodoType } from "./types";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuid } from "uuid";

export const TodoInput = ({
  onItemAdded,
}: {
  onItemAdded: (todo: TodoType) => void;
}) => {
  const [content, setContent] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const id = uuid();
      onItemAdded({ id, content, completed: false });
    }
  };

  return (
    <input
      type="text"
      data-testid="todo-input"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};
