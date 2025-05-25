import { useState } from "react";
import CreateTask from "./components/CreateTask.tsx";
import TaskList from "./components/TaskList.tsx";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleCreateTask = (taskData) => {
    const newTask = {
      id: Date.now().toString(),
      ...taskData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TaskEasy - Task Management</h1>
        <p>Day 2: Implementing US-001 & US-002</p>
      </header>

      <main>
        <section className="create-task-section">
          <h2>Create New Task</h2>
          <CreateTask onCreateTask={handleCreateTask} />
        </section>

        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}

export default App;