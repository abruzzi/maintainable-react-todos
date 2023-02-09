import { ChangeEvent } from "react";
import { useCommandAndKey } from "../hooks/useCommandAndKey";

export const SearchInput = ({
  performSearch,
}: {
  performSearch: (query: string) => void;
}) => {
  const { inputRef } = useCommandAndKey("s");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    performSearch(e.target.value);
  };

  return (
    <input
      ref={inputRef}
      className="todo-input"
      type="text"
      data-testid="search-input"
      onChange={handleChange}
      placeholder="Type to search..."
    />
  );
};
