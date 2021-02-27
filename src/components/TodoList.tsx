import { FC } from "react";
import TodoItem from "./TodoItem";
import { TodoInterface } from "../types";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.5rem;
  min-height: 200px;
`;

interface Props {
  items: TodoInterface[];
}

const TodoList: FC<Props> = ({ items }) => (
  <List>
    {items.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </List>
);

export default TodoList;
