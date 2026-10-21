import React, { useState } from "react";
import FilterBar from "./FilterBar";
import TaskTable from "./TaskTable";

const TaskList = ({ tasks, onDelete, onToggleDone }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("Tất cả");

  const filteredTasks = tasks.filter((task) => {
    const matchName = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchPriority =
      priorityFilter === "Tất cả" || task.priority === priorityFilter;
    return matchName && matchPriority;
  });

  return (
    <div>
      <h2>Danh sách công việc</h2>
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      />
      <TaskTable
        tasks={filteredTasks}
        onDelete={onDelete}
        onToggleDone={onToggleDone}
      />
    </div>
  );
};

export default TaskList;
