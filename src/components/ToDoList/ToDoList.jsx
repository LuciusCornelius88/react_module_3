import React, { Component } from 'react';

import ToDo from '../ToDo/ToDo';
import FormToDo from 'components/FormToDo/FormToDo';

// import todo from '../../todo.json';

class ToDoList extends Component {
  state = {
    todoList: '',
    isAdd: false,
    isDelete: false,
  };

  STORAGE_KEY = 'todo';

  componentDidMount() {
    if (localStorage.getItem(this.STORAGE_KEY)) {
      this.setState({
        todoList: JSON.parse(localStorage.getItem(this.STORAGE_KEY)),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.todoList.length < this.state.todoList.length) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state.todoList));
      this.setState({ isAdd: true });
      setTimeout(() => {
        this.setState({ isAdd: false });
      }, 1500);
    } else if (prevState.todoList.length > this.state.todoList.length) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state.todoList));
      this.setState({ isDelete: true });
      setTimeout(() => {
        this.setState({ isDelete: false });
      }, 1500);
    }
  }

  toggleCheckbox = id =>
    this.setState(prevState => ({
      todoList: prevState.todoList.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    }));

  addToDo = todo => {
    this.setState(prevState => ({
      todoList: [...prevState.todoList, todo],
    }));
  };

  deleteTodo = id =>
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(todo => todo.id !== id),
    }));

  render() {
    return (
      <>
        <h1>My To-Do list</h1>
        {this.state.isAdd && (
          <div className="alert alert-success" role="alert">
            New ToDo added!
          </div>
        )}
        {this.state.isDelete && (
          <div className="alert alert-danger" role="alert">
            ToDo deleted!
          </div>
        )}
        <FormToDo addToDo={this.addToDo} />
        {this.state.todoList && (
          <ul className="list-group list-group-flush">
            {this.state.todoList.map(todo => (
              <ToDo key={todo.id} todo={todo} toggleCheckbox={this.toggleCheckbox} deleteTodo={this.deleteTodo} />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default ToDoList;
