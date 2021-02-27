import { useState, useContext, FC, FormEvent } from "react";
import TodoContext from "../context/";

const AddTodo: FC = () => {
  const { dispatchTodos, dispatchFilter } = useContext(TodoContext);
  const [task, setTask] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (task) {
      dispatchTodos({ type: "ADD_TODO", text: task });
      dispatchFilter({ type: "SHOW_ALL" });
    }

    setTask("");
  };

  const handleChange = (event: FormEvent) => {
    const input = event.target as HTMLInputElement;
    setTask(input.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={task}
        onChange={handleChange}
        placeholder='Enter your todo'
      />
    </form>
  );
};

export default AddTodo;
