import { useState } from "react";
import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";
import { v4 as uuid } from "uuid";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([]);

  const addToDo = (task) => {
    const key = uuid();

    setToDoList((toDoList) => [...toDoList, { key, task }]);
  };

  const removeToDo = (toDoKey) => {
    setToDoList((toDoList) => toDoList.filter((toDo) => toDo.key !== toDoKey));
  };

  return (
    <div>
      <NewToDoForm addToDo={addToDo} />
      {toDoList.map((toDo) => (
        <ToDo removeToDo={removeToDo} toDoKey={toDo.key} task={toDo.task} />
      ))}
    </div>
  );
};

export default ToDoList;
