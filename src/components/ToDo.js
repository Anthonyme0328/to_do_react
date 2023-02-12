import React from 'react'
import {FaTimes, FaExclamation } from 'react-icons/fa'


const ToDo = ({todo, onDelete, onToggle}) => {
  return (
    <div 
      className={`todo ${todo.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(todo.id)}
    >
      {todo.reminder ? <FaExclamation style={{color: 'red'}} /> : '' }
      
      <h3>
        {todo.text} 
        <FaTimes 
          style={{color: 'black', cursor: 'pointer'}} 
          onClick={() => onDelete(todo.id)} 
        />
        
        
      </h3>

      

      <p>
        {todo.day}
      </p>
      
    </div>
  )
}

export default ToDo