import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Layout from "./components/Layout";
import Home from "./components/Home";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import TaskDetail from "./components/TaskDetail";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("gk_tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
      setLoading(false);
    } else {
      const controller = new AbortController();
      axios
        .get("/data/tasks.json", { signal: controller.signal })
        .then((res) => {
          setTasks(res.data);
          setLoading(false);
        })
        .catch((err) => {
          if (!axios.isCancel(err)) {
            setError("Không tải được dữ liệu");
            setLoading(false);
          }
        });

      return () => {
        controller.abort();
      };
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("gk_tasks", JSON.stringify(tasks));
    }
  }, [tasks, loading]);

  const handleAddTask = (newTask) => {
    const maxId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) : 0;
    const taskObj = {
      id: maxId + 1,
      ...newTask,
      done: false,
    };
    setTasks([...tasks, taskObj]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleToggleDone = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home tasks={tasks} />} />
        <Route
          path="tasks"
          element={
            <TaskList
              tasks={tasks}
              onDelete={handleDeleteTask}
              onToggleDone={handleToggleDone}
            />
          }
        />
        <Route path="tasks/new" element={<AddTask onAdd={handleAddTask} />} />
        <Route path="tasks/:id" element={<TaskDetail tasks={tasks} />} />
      </Route>
    </Routes>
  );
};

export default App;
