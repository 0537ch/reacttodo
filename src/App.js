import { useState, useEffect, useRef } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }, []);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    const newItem = { text: newTask, completed: false };
    setTasks([...tasks, newItem]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>My To-Do List</h1>

      <TaskInput newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
