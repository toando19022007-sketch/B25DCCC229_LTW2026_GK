import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({ tasks, onDelete, onToggleDone }) => {
  if (tasks.length === 0) {
    return <div>Không có dữ liệu</div>;
  }

  return (
    <div>
      <p>Tìm thấy {tasks.length} công việc</p>
      <table
        border="1"
        cellPadding="8"
        cellSpacing="0"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Công việc</th>
            <th>Người làm</th>
            <th>Ưu tiên</th>
            <th>Số giờ</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggleDone={onToggleDone}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
