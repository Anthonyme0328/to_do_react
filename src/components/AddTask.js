import React, {useState} from 'react'

const AddTask = ({onAdd}) => {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please Add At Least One Thing To Do')
      return
    }

    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    // form for adding in new To Do's
    <form 
      className='add-form' 
      onSubmit={onSubmit}
    >
      {/* top row for to do name */}
      <div className='form-control'>

        <label> 
          To Do 
        </label>

        <input
          className='input-box' 
          type='text' 
          placeholder='Add To Do' 
          value={text} 
          onChange={(e) => setText(e.target.value)} >
        </input>

      </div>

      {/* middle row for day of the week */}
      <div className='form-control'>

        <label> 
          Day Of the Week 
        </label>

        <input 
          className='input-box' 
          type='text' 
          placeholder='Add Day of the Week' 
          value={day} 
          onChange={(e) => setDay(e.target.value)} >
        </input>

      </div>

      {/* bottom row with reminder check box */}
      <div className='form-control form-control-check'>

        <label> 
          Set Reminder 
        </label>

        <input 
          type='checkbox' 
          checked={reminder} 
          value={reminder} 
          onChange={(e) => setReminder(e.currentTarget.checked)}>
        </input>

      </div>

      {/* very bottom of form with submit button */}
      <input 
        className='btn btn-block' 
        type='submit' 
        value='Save Task' 
      />

    </form>
  )
}

export default AddTask