import React, { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask({ id: Date.now(), title: task }); 
      setTask(""); 
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your new todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default AddTaskForm;
