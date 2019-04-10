import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    let inValid = this.state.username === "" || this.state.password === ""
    inValid? null : this.props.handleLogin(ev.target)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username"
                   name="username"
                   type="text"
                   value={this.state.username}
                   onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password"
                   name="password"
                   type="text"
                   value={this.state.password}
                   onChange={this.handleChange}/>
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
