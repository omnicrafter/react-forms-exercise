import { useState } from "react";

const NewToDoForm = ({ addToDo }) => {
  const [toDoData, setToDoData] = useState({ task: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setToDoData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { task } = toDoData;

    addToDo(task);

    setToDoData({ task: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New Task</label>
      <input
        id="task"
        type="text"
        name="task"
        placeholder="write your task here"
        value={toDoData.task}
        onChange={handleChange}
      />
      <button type="submit">Submit New Box</button>
    </form>
  );
};

export default NewToDoForm;
