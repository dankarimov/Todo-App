import { v4 as uuid } from "uuid";
import { TodoInterface } from "../types";

export const filterReducer = (state: string, action: { type: string }) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "ALL";
    case "SHOW_COMPLETE":
      return "COMPLETE";
    case "SHOW_INCOMPLETE":
      return "INCOMPLETE";
    default:
      throw new Error();
  }
};

export const todoReducer = (
  state: TodoInterface[],
  action: {
    type: string;
    id?: string;
    text?: string;
    payload?: any;
  }
) => {
  switch (action.type) {
    case "DO_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        }
        return todo;
      });
    case "UNDO_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        }
        return todo;
      });
    case "ADD_TODO":
      return state.concat({
        text: action.text,
        id: uuid(),
        complete: false,
      } as TodoInterface);
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "INITIAL_TODO":
      return action.payload;
    default:
      throw new Error();
  }
};
