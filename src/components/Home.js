import React from "react";

const Home = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.reduce((acc, t) => acc + (t.done ? 1 : 0), 0);
  const remainingHours = tasks.reduce(
    (acc, t) => acc + (!t.done ? Number(t.hours) : 0),
    0,
  );

  return (
    <div>
      <h2>Công việc nhóm</h2>
      <p>
        <strong>Tổng số công việc: {totalTasks}</strong>
      </p>
      <p>
        <strong>Số công việc đã xong: {completedTasks}</strong>
      </p>
      <p>
        <strong>Tổng số giờ còn lại: {remainingHours}</strong>
      </p>
    </div>
  );
};

export default Home;
