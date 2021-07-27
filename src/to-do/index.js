import React, { useEffect, useState } from 'react'
import './styles/main.css'
import Container from '../components/Container';
import List from './components/List';
import AddTask from './components/AddTask';
import TaskContext from './context/TaskContext';

function App() {

  useEffect(() => {
    document.title = 'To-do App'
  }, [])
  const [tasks, setState] = useState([])

  useEffect(() => {
    const tasks = localStorage.getItem('tasks')

    if(tasks) {
      setState(JSON.parse(tasks))
    }
  }, [])


  const addTask = (task) => {
    // console.log(task)
    setState([...tasks, task])
  }

  const removeTask = (id) => {
    setState(tasks.filter(task => task.id !== id))
  }

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) return {
        ...task,
        done: !task.done
      }
      return task
    })

    setState(updatedTasks)
    
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="App">
      <Container>
        <h1>Some To-do App</h1>
          <TaskContext.Provider value={{
            tasks, addTask, removeTask, toggleComplete
          }}>
            <AddTask />
            <List />
          </TaskContext.Provider>
      </Container>
      
    </div>
  );
}

export default App;
