import {render, screen, within} from "@testing-library/react";
import { Todo } from "./Todo";
import userEvent from "@testing-library/user-event";

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

  it('delete an item when the button is clicked', () => {
    render(<Todo />);

    const input = screen.getByTestId('todo-input');
    userEvent.type(input, 'buy some milk');
    userEvent.type(input, '{enter}');

    const item = screen.getByText('buy some milk');
    expect(item).toBeInTheDocument();

    const deleteButton = screen.getByTestId('delete-button');
    userEvent.click(deleteButton);
    expect(item).not.toBeInTheDocument();
  })

  it('renders a list of items', () => {
    const items = [
      {
        id: "1",
        content: "buy some milk",
        completed: false
      },
      {
        id: "2",
        content: "learn react",
        completed: true
      },
      {
        id: "3",
        content: "clean the house",
        completed: false
      }
    ]

    render(<Todo items={items} />);
    expect(screen.getByText('clean the house')).toBeInTheDocument();
  })

  it('renders different groups of items', () => {
    const items = [
      {
        id: "1",
        content: "buy some milk",
        completed: false
      },
      {
        id: "2",
        content: "learn react",
        completed: true
      },
      {
        id: "3",
        content: "clean the house",
        completed: false
      }
    ]

    render(<Todo items={items} />);
    const todoItems = screen.getAllByTestId('todo-item');
    expect(todoItems.length).toEqual(items.length);

    const completedTab = screen.getByTestId('todo-completed');
    userEvent.click(completedTab);

    expect(screen.getAllByTestId('todo-item').length).toEqual(1);
    expect(screen.getByText('learn react')).toBeInTheDocument();
  })

  it('renders active tab', () => {
    const items = [
      {
        id: "1",
        content: "buy some milk",
        completed: false
      },
      {
        id: "2",
        content: "learn react",
        completed: true
      },
      {
        id: "3",
        content: "clean the house",
        completed: false
      }
    ]

    render(<Todo items={items} />);
    const todoItems = screen.getAllByTestId('todo-item');
    expect(todoItems.length).toEqual(items.length);

    const activeTab = screen.getByTestId('todo-active');
    userEvent.click(activeTab);

    expect(screen.getAllByTestId('todo-item').length).toEqual(2);
  })


  it('shows summary information', () => {
    const items = [
      {
        id: "1",
        content: "buy some milk",
        completed: false
      },
      {
        id: "2",
        content: "learn react",
        completed: true
      },
      {
        id: "3",
        content: "clean the house",
        completed: false
      }
    ]

    render(<Todo items={items} />);
    const todoItems = screen.getAllByTestId('todo-item');
    expect(todoItems.length).toEqual(items.length);

    const totalTab = screen.getByTestId('todo-total');
    userEvent.click(totalTab);

    const activeTab = screen.getByTestId('todo-active');
    userEvent.click(activeTab);

    const completedTab = screen.getByTestId('todo-completed');
    userEvent.click(completedTab);

    expect(within(totalTab).getByText('3')).toBeInTheDocument();
    expect(within(completedTab).getByText('1')).toBeInTheDocument();
    expect(within(activeTab).getByText('2')).toBeInTheDocument();
  })


  it('switch tabs', () => {
    const items = [
      {
        id: "1",
        content: "buy some milk",
        completed: false
      },
      {
        id: "2",
        content: "learn react",
        completed: true
      },
      {
        id: "3",
        content: "clean the house",
        completed: false
      }
    ]

    render(<Todo items={items} />);
    const todoItems = screen.getAllByTestId('todo-item');
    expect(todoItems.length).toEqual(items.length);

    const completedTab = screen.getByTestId('todo-completed');
    userEvent.click(completedTab);

    expect(screen.getAllByTestId('todo-item').length).toEqual(1);
    expect(screen.getByText('learn react')).toBeInTheDocument();

    const totalTab = screen.getByTestId('todo-total');
    userEvent.click(totalTab);

    expect(screen.getAllByTestId('todo-item').length).toEqual(3);
  })


})