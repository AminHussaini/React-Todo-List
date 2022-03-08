import React, { Component } from 'react'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration :this.props.todo.completed ?"line-through": "none"
    }
  }
  // markComplete = (e) => {
  //   console.log(this.props.todo.id);
  //   // this.props.
  // }
  render() {
    const {id, title,completed} = this.props.todo
    return (
      <div style={this.getStyle()} className="todo-item">

        <label>
          <input type="checkBox"
          onChange={this.props.markComplete.bind(this,id)}
          checked={completed ? true: false} />
          {"  "}
          {title}
          <button onClick={this.props.delTodo.bind(this,id)} className="delTodo">X</button>
        </label>
      </div>
    )
  }
}

export default TodoItem
