import { createContext } from "react";

const TodoContext = createContext(null);

function AppProvider({ value, children }) {
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export { AppProvider };
export default TodoContext;
