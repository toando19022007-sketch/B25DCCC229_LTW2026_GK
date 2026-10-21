import React, { useState } from "react";
import { Link } from "react-router-dom";

const TaskRow = ({ task, onDelete, onToggleDone }) => {
  const { id, title, assignee, priority, hours, done } = task;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <tr
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: isHovered ? "#f0f0f0" : "transparent" }}
    >
      <td>
        <Link
          to={`/tasks/${id}`}
          style={{ textDecoration: done ? "line-through" : "none" }}
        >
          {title}
        </Link>
      </td>
      <td>{assignee}</td>
      <td>{priority}</td>
      <td>{hours}</td>
      <td>{done ? "Đã xong" : "Đang làm"}</td>
      <td>
        <button onClick={() => onToggleDone(id)} style={{ marginRight: "5px" }}>
          {done ? "Làm lại" : "Hoàn thành"}
        </button>
        <button onClick={() => onDelete(id)}>Xóa</button>
      </td>
    </tr>
  );
};

export default TaskRow;
