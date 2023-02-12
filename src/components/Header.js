import React from 'react'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
  return (
   <header className='header'>
    <h1>{title}</h1>
    <Button color={showAdd ? '#1c0fd6' : '#5d90f5'} text={showAdd ? 'Close Form' : 'Open Form'} onClick={onAdd} />
   </header>
  )
}

export default Header