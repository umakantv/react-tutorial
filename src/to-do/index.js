import React, { useEffect, useState } from 'react'
import './styles/main.css'
import Container from '../components/Container';
import List from './components/List';
import TaskContext from './contexts/TaskContext'
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    let tasks = localStorage.getItem('tasks')
    if(tasks) {
      try {
        tasks = JSON.parse(tasks)
        setTasks(tasks)
      } catch(err) {}
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    task.id = tasks.length;
    setTasks([...tasks, task])
  }

  const removeTask = (taskId) => {
    const final = tasks.filter((task) => task.id !== taskId)
    setTasks(final)
  }

  const toggleDone = (taskId) => {
    const duplicate = [...tasks]
    const task = duplicate.find((task) => task.id === taskId)
    if(!task) return
    task.done = !task.done
    setTasks(duplicate)
  }

  const updateTask = (taskId, title) => {
    const duplicate = [...tasks]
    const task = duplicate.find((task) => task.id === taskId)
    if(!task) return
    task.title = title
    setTasks(duplicate)
  }

  useEffect(() => {
    document.title = 'To-do App'
  }, [])

  return (
    <div className="App">
      <Container>
        <h1>Some To-do App</h1>
        <TaskContext.Provider
          value={{
            tasks,
            addTask,
            toggleDone,
            updateTask,
            removeTask
          }}
        >
          <AddTask />
          <List />
        </TaskContext.Provider>
      </Container>
      
    </div>
  );
}

export default App;
