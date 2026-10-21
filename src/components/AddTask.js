import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRIORITIES } from "../data";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("Trung bình");
  const [hours, setHours] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !assignee.trim() || hours === "") {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const numHours = Number(hours);
    if (!Number.isInteger(numHours) || numHours < 1 || numHours > 40) {
      setError("Số giờ phải từ 1 đến 40");
      return;
    }

    setError("");
    onAdd({
      title: title.trim(),
      assignee: assignee.trim(),
      priority,
      hours: numHours,
    });

    navigate("/tasks", { replace: true });
  };

  return (
    <div>
      <h2>Thêm công việc mới</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "10px",
        }}
      >
        <div>
          <label htmlFor="title">Tên công việc: </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="assignee">Người làm: </label>
          <input
            id="assignee"
            type="text"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="priority">Mức ưu tiên: </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {PRIORITIES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="hours">Số giờ ước tính: </label>
          <input
            id="hours"
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>

        <button type="submit">Thêm</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
};

export default AddTask;
