import React, { useState } from 'react';

import Header from './components/Header';
import ToDos from './components/ToDos';
import AddTask from './components/AddTask'

import './App.css';

function App() {

  const [showAddForm, setShowAddForm] = useState(false)

  const [todos, setTodos] = useState([])
  
  const AddTodos = (todo) => {
    const id = Math.floor(Math.random() * 1000 ) + 1

    const newTask = { id, ...todo}
    setTodos([...todos, newTask])

  }

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const switchReminder = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, reminder: !todo.reminder} : todo))
  }



  return (
    <div className="mainArea" >

      <Header 
        title='To Do Tracker' 
        onAdd=
          {
            () => setShowAddForm(!showAddForm)
          } 
          showAdd={showAddForm} 
      />

      { 
        showAddForm && 
          <AddTask 
            onAdd={AddTodos} 
          />
      }
      
      {
        todos.length > 0 
          ? 
            (
              <ToDos 
                todos={todos}  
                onToggle={switchReminder} 
                onDelete={deleteTask} /> 
            ) 
          : 
            ('No Current To Do`s') 
      }

    </div>
  );
}

export default App;
