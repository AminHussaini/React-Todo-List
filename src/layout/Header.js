import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header({ onToggleForm, toggleFormValue }) {
  const location = useLocation()
  return (
    <div className="header">
      <h1>React Project </h1>
      <Link to="/" style={{ color: "#fff" }}>Todo list</Link>
      {"  |  "}
      <Link to="/AddList" style={{ color: "#fff" }}> Add List</Link>
      {location.pathname !== "/" ?
        <button onClick={() => onToggleForm()} className={`btn ${toggleFormValue ? "close-task" : "add-task"}`}>
          {toggleFormValue ? "Close Task" : "Add Task"}
        </button>
        : ''
      }
    </div >
  )
}
