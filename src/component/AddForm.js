import { useState } from 'react'

const AddForm = ({ addTask }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    addTask({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>
          Task
          </label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>
          Day and Time
          </label>
        <input type="datetime-local" value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="form-control-check">
        <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        <label>
          Set a Reminder
          </label>
      </div>
      <input type="submit" className="btn btn-block m-t-20" value="Save Task" />
    </form>
  )

}

export default AddForm
