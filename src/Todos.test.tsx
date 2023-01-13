import {render, screen} from "@testing-library/react";
import { Todo } from "./Todo";
import userEvent from "@testing-library/user-event";
~
describe('Todos application', () => {
  it('renders the title', () => {
    render(<Todo />);

    expect(screen.getByText('todos')).toBeInTheDocument();
  })

  it('adds item to the list', () => {
    render(<Todo />);

    const input = screen.getByTestId('todo-input');
    userEvent.type(input, 'buy some milk');
    userEvent.type(input, '{enter}');

    expect(screen.getByText('buy some milk')).toBeInTheDocument();
  })

  it('completes an item when clicked', () => {
    render(<Todo />);

    const input = screen.getByTestId('todo-input');
    userEvent.type(input, 'buy some milk');
    userEvent.type(input, '{enter}');

    const item = screen.getByText('buy some milk');
    userEvent.click(item);

    expect(item).toHaveAttribute('data-completed', "true");
  })
})