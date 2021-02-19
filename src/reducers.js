import { v4 as uuid } from "uuid";

export const filterReducer = (state, action) => {
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

export const todoReducer = (state, action) => {
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
        task: action.task,
        id: uuid(),
        complete: false,
      });
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "INITIAL_TODO":
      return action.payload;
    default:
      throw new Error();
  }
};
