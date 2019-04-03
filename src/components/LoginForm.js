import React from "react";

class LoginForm extends React.Component {
  constructor() {

    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = ev => {
    this.setState({
    [ev.target.name]: ev.target.value
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={ev => this.handleSubmit(ev)}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={ev => this.handleInputChange(ev)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              onChange={ev => this.handleInputChange(ev)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
