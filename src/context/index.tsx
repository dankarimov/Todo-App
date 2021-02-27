import { createContext, FC, ReactNode } from "react";

interface ContextInterface {
  dispatchTodos: (todo: { type: string; text?: string; id?: string }) => void;
  dispatchFilter: (filter: { type: string }) => void;
}

const TodoContext = createContext({} as ContextInterface);

interface Props {
  value: any;
  children: ReactNode;
}

const AppProvider: FC<Props> = ({ value, children }) => {
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export { AppProvider };
export default TodoContext;
