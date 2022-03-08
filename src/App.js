import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './layout/Header'
import Todos from './component/Todos'
import AddTodos from './component/AddTodos';
import AddList from './pages/AddList';
import axios from 'axios';
import SelectBox from './component/SelectBox';
// import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleForm: false,
      // data: [
      //   {
      //     id: 1,
      //     title: "Go to School",
      //     completed: false,
      //   },
      //   {
      //     id: 2,
      //     title: "Go to College",
      //     completed: false,
      //   },
      //   {
      //     id: 3,
      //     title: "Going Marking",
      //     completed: true,
      //   }
      // ],
      data: []
    }
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ data: res.data }))
  }
  markComplete = (id) => {
    // this.props.
    this.setState({
      todo: this.state.data.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    })
  }
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        data: this.state.data.filter(todo => todo.id !== id)
      }))
    // this.setState({
    //   data: this.state.data.filter(todo => todo.id !== id)
    // })
  }
  addTodo = (title) => {
    // const newTodo = {
    //   id: this.state.data.length + 1,
    //   title,
    //   completed: false
    // }
    // this.setState({
    //   data: [...this.state.data, newTodo]
    // })
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false,
    }).then(res => this.setState({
      data: [...this.state.data, res.data],
    }));
  }
  toggleForm = () => {
    this.setState({ toggleForm: !this.state.toggleForm })
  }
  render() {
    return (
      // <SelectBox />
      <Router>
        <Header onToggleForm={this.toggleForm} toggleFormValue={this.state.toggleForm} />
        <Route exact path="/" render={props => (
          <div className="container">
            <AddTodos addTodo={this.addTodo} />
            <Todos
              todosList={this.state.data}
              markComplete={this.markComplete}
              delTodo={this.delTodo}
            />
          </div>
        )}
        />
        <Route path="/AddList" render={props=> (
          <AddList toggleForm={this.state.toggleForm} />
        )} />
      </Router>
    );
  }
}

// App.propTypes = {
//   todosList:PropTypes.array.isRequired
// };

export default App;