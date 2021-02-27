import { useContext, FC } from "react";
import TodoContext from "../context/";
import styled from "styled-components";
import { TodoInterface } from "../types";

const Item = styled.li`
  margin-bottom: 0.8rem;
  padding-right: 1rem;
  position: relative;
`;

const Button = styled.button`
  background: #999;
  color: #fff;
  border: none;
  padding: 0.1rem 0.3rem;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  &:focus {
    outline: 0;
  }
`;

const Text = styled.span`
  margin-left: 0.5rem;
`;

interface Props {
  todo: TodoInterface;
}

const TodoItem: FC<Props> = ({ todo }) => {
  const { dispatchTodos } = useContext(TodoContext);

  const handleCheck = () =>
    dispatchTodos({
      type: todo.complete ? "UNDO_TODO" : "DO_TODO",
      id: todo.id,
    });

  const handleDelete = () =>
    dispatchTodos({
      type: "DELETE_TODO",
      id: todo.id,
    });

  return (
    <Item>
      <input type='checkbox' checked={todo.complete} onChange={handleCheck} />
      <Text>{todo.text}</Text>
      <Button onClick={() => handleDelete()}>&#x2715;</Button>
    </Item>
  );
};

export default TodoItem;
