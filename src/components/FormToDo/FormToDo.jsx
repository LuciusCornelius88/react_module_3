import { Component } from 'react';
import { ToDoForm } from './FormToDo.styled';
import { nanoid } from 'nanoid';

class FormToDo extends Component {
  state = {
    todo: '',
  };

  handleChange = ({ target }) =>
    this.setState({
      [target.name]: target.value,
    });

  submitForm = evt => {
    evt.preventDefault();
    evt.target.reset();

    const todo = {
      id: nanoid(),
      title: this.state.todo,
      completed: false,
    };

    this.props.addToDo(todo);

    this.setState({
      todo: '',
    });
  };

  render() {
    return (
      <ToDoForm onSubmit={this.submitForm}>
        <div className="mb-3">
          <label forhtml="exampleInput" className="form-label">
            Add ToDo
          </label>
          <input
            name="todo"
            type="text"
            className="form-control"
            id="exampleInput"
            onChange={this.handleChange}
            value={this.state.login}
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add ToDo
        </button>
      </ToDoForm>
    );
  }
}

export default FormToDo;
