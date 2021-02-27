import React, { useReducer, useEffect, FC } from "react";
import { v4 as uuid } from "uuid";
import { AppProvider } from "./context/";
import { filterReducer, todoReducer } from "./reducers";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import styled from "styled-components";
import { TodoInterface } from "./types";

const Header = styled.header`
  background: palevioletred;
  color: #eee;
  text-align: center;
  padding: 0.6rem;
`;

const TodoApp = styled.div`
  width: 420px;
`;

const Reset = styled.div`
  text-align: right;
  margin-top: 0.5rem;
`;

const INITIAL_TODOS: TodoInterface[] = [
  {
    id: uuid(),
    text: "Make a todo list",
    complete: true,
  },
  {
    id: uuid(),
    text: 'Check off first thing on the "todo" list',
    complete: true,
  },
  {
    id: uuid(),
    text: "Realize you've already accomplished 2 things on the list",
    complete: true,
  },
  {
    id: uuid(),
    text: "Reward yourself with a nap",
    complete: false,
  },
];

const App: FC = () => {
  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");
  const lsTodos = JSON.parse(localStorage.getItem("todos") || "{}");
  const [todos, dispatchTodos] = useReducer(
    todoReducer,
    lsTodos || INITIAL_TODOS
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const reset = () => {
    dispatchTodos({
      type: "INITIAL_TODO",
      payload: INITIAL_TODOS,
    });
  };

  const filteredTodos = todos.filter((todo: TodoInterface) => {
    if (filter === "ALL") {
      return true;
    }

    if (filter === "COMPLETE" && todo.complete) {
      return true;
    }

    if (filter === "INCOMPLETE" && !todo.complete) {
      return true;
    }

    return false;
  });

  return (
    <AppProvider value={{ dispatchTodos, dispatchFilter }}>
      <TodoApp>
        <Header>
          <h1>TODO APP</h1>
        </Header>
        <AddTodo />
        <Reset className='button' onClick={() => reset()}>
          [reset]
        </Reset>
        <TodoList items={filteredTodos} />
        <Filter dispatchFilter={dispatchFilter} active={filter} />
      </TodoApp>
    </AppProvider>
  );
};

export default App;
