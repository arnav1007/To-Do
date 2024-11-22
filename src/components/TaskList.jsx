import React from "react";
import TaskItem from "./TaskItem";
import "./TaskAnimation.css";

const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEditTask}
          onRemove={onDeleteTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;
