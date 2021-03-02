import React, { useState } from "react";
import NewTask from "./Component/NewTask";
import TasksList from "./Component/TaskList";

const App = () => {
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasts] = useState([]);

  { //* target is equal to event.target
   }
  const handleChange = ({target }) => {
    const { name, value } = target;
    {//* set name attribute as key
    }
    setNewTask(prev => ({ ...prev,  [name]: value , id: Date.now() }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return alert('please add task');
    setAllTasts((prev) => [ newTask , ...prev]);
    setNewTask({});
  };

  const handleDelete = (taskIdToRemove) => {
    setAllTasts((prev) => prev.filter(
      task => task.id !== taskIdToRemove
    ));
  };

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}

export default App;