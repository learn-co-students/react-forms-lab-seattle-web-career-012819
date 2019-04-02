import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({
    [e.target.name]: e.target.value
    })
  }

  login =(e) =>{
    e.preventDefault();
    if(this.state.password !=='' && this.state.username !==''){
      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value ={this.state.username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value = {this.state.password} onChange={this.handleChange}/>
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
