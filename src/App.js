import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


// import Button from './components/Button'
import "./styles.css";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Date with the girlfriend",
      day: "Feb 6th at 6:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Football Match",
      day: "Feb 7th at 9:00am",
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task))
  }

  // AddTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd= {() => setShowAddTask(!showAddTask)} showAdd= {showAddTask} className="header" />
      {showAddTask && <AddTask  onAdd = {addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        <h3 style={{ color: "white" }}>No more tasks left!</h3>
      )}
    </div>
  );
};

export default App;
