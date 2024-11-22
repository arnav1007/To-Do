export const getTasks = async () => {
    return new Promise((resolve) => {
      const tasks = [
        { id: 1, title: "Buy a new gaming laptop" },
        { id: 2, title: "Complete a previous task" },
        { id: 3, title: "Create video for YouTube" },
        { id: 4, title: "Create a new portfolio site" },
        { id: 5, title: "Read a book for inspiration" },
      ];
      resolve({ data: tasks });
    });
  };
  
  export const addTask = async (task) => {
    return new Promise((resolve) => {
      const newTask = { id: Date.now(), title: task.title };
      resolve({ data: newTask });
    });
  };
  
  export const deleteTask = async (id) => {
    return new Promise((resolve) => resolve({ data: id }));
  };
  
  export const updateTask = async (id, updatedTask) => {
    return new Promise((resolve) => resolve({ data: { id, ...updatedTask } }));
  };
  