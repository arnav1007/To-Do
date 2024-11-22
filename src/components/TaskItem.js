import React, { useState } from "react";
import "./TaskAnimation.css";

const TaskItem = ({ task, onEdit, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.title);

  const handleEdit = () => {
    if (isEditing && editedText.trim()) {
      onEdit(task.id, editedText); 
    }
    setIsEditing(!isEditing); 
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <p>{task.title.replace("reminder", "todo")}</p>
      )}
      <div className="button-group">
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button className="remove-btn" onClick={() => onRemove(task.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
