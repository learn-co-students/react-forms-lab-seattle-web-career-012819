import React from "react";

class LoginForm extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      username: '',
      password: ''
    };
  }

 handleChange = (ev) => {
   const input = ev.target.name
   const value = ev.target.value
   this.setState({
     [input]: value
   })
 }

 handleSubmit = (ev) => {
    ev.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.onSubmit(this.state)
 }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username"
              name="username" 
              type="text" 
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
