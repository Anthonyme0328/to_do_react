import React from 'react'
import ToDo from './ToDo'



const ToDos = ({ todos, onDelete, onToggle }) => {

  return (
    <>
      {todos.map((todo) => (
        <ToDo 
          key={todo.id} 
          todo={todo} 
          onDelete={onDelete} 
          onToggle={onToggle} 
        />
      ))}
    </>
  )
}

export default ToDos