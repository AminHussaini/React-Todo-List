import React, { Component } from 'react'

export class AddTodos extends Component {
  state = {
    title: "",
  }

  addTodoValue = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(
      this.state.title
    );
    this.setState({title:""})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="add-todos">
        <input
          type="text"
          value={this.state.title}
          name="title"
          placeholder="Add a new Todo"
          onChange={this.addTodoValue}
        />
        <input type="submit" value="Add" />
      </form>
    )
  }
}

export default AddTodos
