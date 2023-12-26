import { Component } from 'react';

class FormLogin extends Component {
  state = {
    login: '',
    password: '',
    isChecked: false,
    isDisabled: true,
  };

  handleChange = ({ target }) =>
    this.setState({
      [target.name]: target.value,
    });

  toggleChecked = () => {
    this.setState(prevState => ({ isChecked: !prevState.isChecked }));
    this.setState({
      isDisabled: this.state.isChecked ? true : false,
    });
  };

  submitForm = evt => {
    evt.preventDefault();
    this.props.createUser({
      login: this.state.login,
      password: this.state.password,
    });

    this.setState({
      login: '',
      password: '',
    });

    this.props.closeModal();
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="mb-3">
          <label forhtml="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="login"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={this.handleChange}
            value={this.state.login}
            autoComplete="off"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label forhtml="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={this.handleChange}
            value={this.state.password}
            autoComplete="off"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={this.state.isChecked}
            onChange={this.toggleChecked}
          />
          <label className="form-check-label" forhtml="exampleCheck1">
            Accept the conditions
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={this.state.isDisabled}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default FormLogin;
