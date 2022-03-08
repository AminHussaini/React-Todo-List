import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

export default class Todos extends Component {

  render() {
    return this.props.todosList.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
        />
    ));
  }
}
Todos.propTypes = {
  todosList: PropTypes.array.isRequired
};
