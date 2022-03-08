import { useState, useEffect } from "react";
import Tasks from "../component/Tasks";
import AddForm from "../component/AddForm";

const AddList = ({ toggleForm }) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Task
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    });
    setTasks(tasks.filter(tasks => tasks.id !== id));
  }
  // toggle the reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((tasks) => tasks.id === id ? { ...tasks, reminder: !tasks.reminder } : tasks))
  }
  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }
  return (
    <div className="container">
      {toggleForm && <AddForm addTask={addTask} />}
      {
        tasks.length === 0 ? <div className="task center"> <h3>There is no task</h3></div>
          :
          <Tasks tasks={tasks} OnDelete={deleteTask} onToggle={toggleReminder} />
      }
    </div>
  )
}

export default AddList
