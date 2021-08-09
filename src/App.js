import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"
import { useState } from "react"


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Interview',
      day: 'Aug 10th at 1:00pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Lunch with Friends',
      day: 'Aug 15th at 12:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Groceries',
      day: 'Aug 16th at 2:30pm',
      reminder: false,
    },
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to show'}
    </div>
  );
}

export default App;
