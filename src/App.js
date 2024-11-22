import React, { useEffect, useState } from "react";
import { getTasks, addTask, updateTask, deleteTask } from "./services/api";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      toast.error("Failed to fetch tasks");
    }
  };

  const handleAddTask = async (newTask) => {
    try {
      const response = await addTask(newTask);
      setTasks([response.data, ...tasks]);
      toast.success("Task added successfully");
    } catch (error) {
      toast.error("Failed to add task");
    }
  };

  const handleEditTask = async (id, updatedTitle) => {
    try {
      const response = await updateTask(id, { title: updatedTitle });
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, title: response.data.title } : task
        )
      );
      toast.success("Task updated successfully");
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error("Failed to delete task");
    }
  };

  const handleClearAll = async () => {
    try {
      for (const task of tasks) {
        await deleteTask(task.id);
      }
      setTasks([]);
      toast.success("All tasks cleared");
    } catch (error) {
      toast.error("Failed to clear tasks");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="heading">To-Do Reminder</div>
        <AddTaskForm onAddTask={handleAddTask} />
      </div>
      <TaskList
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
      {tasks.length > 0 && (
        <div className="clear-all-container">
          <button className="clear-all-btn" onClick={handleClearAll}>
            Clear All Tasks
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
