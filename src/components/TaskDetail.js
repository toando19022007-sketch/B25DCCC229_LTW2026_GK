import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import WorkTimer from "./WorkTimer";

const TaskDetail = ({ tasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const taskId = Number(id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return (
      <div>
        <p>Không tìm thấy công việc.</p>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Chi tiết công việc</h2>
      <WorkTimer />
      <p>
        <strong>Tên công việc: {task.title}</strong>
      </p>
      <p>
        <strong>Người làm: {task.assignee}</strong>
      </p>
      <p>
        <strong>Mức ưu tiên: {task.priority}</strong>
      </p>
      <p>
        <strong>Số giờ: {task.hours}</strong>
      </p>
      <p>
        <strong>Trạng thái: {task.done ? "Đã xong" : "Đang làm"}</strong>
      </p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};

export default TaskDetail;
