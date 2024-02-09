const ToDo = ({ removeToDo, task, toDoKey }) => {
  return (
    <>
      <li>{task}</li>
      <button onClick={() => removeToDo(toDoKey)}>remove</button>
    </>
  );
};

export default ToDo;
