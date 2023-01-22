export const Category = ({label, number, type, switchCategory}: {
  label: string,
  number: number,
  type: string,
  switchCategory: (type: string) => void
}) => {
  return (<div>
    <label>
      {label}
      <button
        data-testid={`todo-${type}`}
        onClick={() => switchCategory(type)}
      >
        {number}
      </button>
    </label>
  </div>)
}