import { TodoType } from "../types";
import {
  ChangeEvent,
  KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { v4 as uuid } from "uuid";
import { useCommandAndKey } from "../hooks/useCommandAndKey";

export const TodoInput = ({
  onItemAdded,
}: {
  onItemAdded: (todo: TodoType) => void;
}) => {
  const [content, setContent] = useState<string>("");

  const { inputRef } = useCommandAndKey("k");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const id = uuid();
      onItemAdded({ id, content, completed: false });
    }
  };

  return (
    <input
      ref={inputRef}
      className="todo-input"
      type="text"
      data-testid="todo-input"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Type to add item, enter to confirm..."
    />
  );
};
