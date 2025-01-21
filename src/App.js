
import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
// import Button from './components/Button'
import './styles.css'
import Button from './components/Button'

const App = () => {
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
  ])
  return (
    <div className='container'>
      <Header className= "header"/>
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App;
