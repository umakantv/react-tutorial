import React, { useEffect } from 'react'
import './styles/main.css'
import Container from '../components/Container';
import List from './components/List';
import AddTask from './components/AddTask';

function App() {

  useEffect(() => {
    document.title = 'To-do App'
  }, [])

  return (
    <div className="App">
      <Container>
        <h1>Some To-do App</h1>
          <AddTask />
          <List />
      </Container>
      
    </div>
  );
}

export default App;
