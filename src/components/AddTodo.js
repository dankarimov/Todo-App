import { useState, useContext } from "react";
import TodoContext from "../context";

const AddTodo = () => {
  const { dispatchTodos, dispatchFilter } = useContext(TodoContext);
  const [task, setTask] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    if (task) {
      dispatchTodos({ type: "ADD_TODO", task });
      dispatchFilter({ type: "SHOW_ALL" });
    }

    setTask("");
  };

  const handleChange = event => setTask(event.target.value);

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
