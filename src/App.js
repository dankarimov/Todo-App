import React, { useReducer, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { AppProvider } from "./context/";
import { filterReducer, todoReducer } from "./reducers";
import AddTodo from "./components/AddTodo.js";
import TodoList from "./components/TodoList.js";
import Filter from "./components/Filter.js";
import styled from "styled-components";

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

const INITIAL_TODOS = [
  {
    id: uuid(),
    task: "Make a todo list",
    complete: true,
  },
  {
    id: uuid(),
    task: 'Check off first thing on the "todo" list',
    complete: true,
  },
  {
    id: uuid(),
    task: "Realize you've already accomplished 2 things on the list",
    complete: true,
  },
  {
    id: uuid(),
    task: "Reward yourself with a nap",
    complete: false,
  },
];

const App = () => {
  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");

  const lsTodos = JSON.parse(localStorage.getItem("todos"));
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

  const filteredTodos = todos.filter(todo => {
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
        <TodoList todos={filteredTodos} />
        <Filter dispatchFilter={dispatchFilter} active={filter} />
      </TodoApp>
    </AppProvider>
  );
};

export default App;
