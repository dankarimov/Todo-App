import TodoItem from "./TodoItem.js";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.5rem;
  min-height: 200px;
`;

const TodoList = ({ todos }) => (
  <List>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </List>
);

export default TodoList;
