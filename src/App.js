import Header from './Header/Header';
import List from './List/List';
import './App.css';
import AddTodo from './AddTodo/AddTodo';
import { useState } from 'react';

function App() {

  const [todo, setTodo] = useState([{
    id: 1,
    title: 'Hello, your tasks will be displayed here',
  }
  ])
  return (
    <>
      <div className='App'>
        <Header />
        <AddTodo todo={todo} setTodo={setTodo} />
        <List todo={todo} setTodo={setTodo} />
      </div>
    </>
  )
}

export default App;
