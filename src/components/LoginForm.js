import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  validateName = (event) => {
    if (event !== undefined) {
      this.setState({
        username: event.target.value
      })
    }
  }

  validatePassword = (event) => {
    if (event !== undefined) {
      this.setState({
        password: event.target.value
      })
    }
  }

  handleSubmit =(event) => {
    event.preventDefault()
    
    //callback function that is used in App - passing in an object
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.handleLogin(this.state)
    }

  }

  render() {
    return (
      <form id="login-form" onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.validateName} required={true}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.validatePassword} required={true}/>
          </label>
        </div>
        <div>
        <button type="submit">Log in</button>
          {/* {this.canSubmit()} */}
        </div>
      </form>
    );
  }
}

export default LoginForm;

// Notes: 

// LoginForm
// Open the components/LoginForm.js file.

// This component takes one prop: onSubmit which is a function — this function is called when the form is being submitted. By default, this function currently just includes console.log. That will allow you to see if the form is functioning correctly when working in your browser.

// You'll find two inputs in this component: <input type="text"> and <input type="password">. Make this a controlled component by adding the necessary attributes to these inputs. The input values should be saved to the component's state on every change.

// An example of an input would look like:

//    <input
//      id="test-username"
//      type="text"
//      name="username"
//      value={this.state.username}
//      onChange={this.handleInputChange}
//    />
// Remember that you can retrieve the input name and value of an event.target from the JS event.

// Add the necessary event handler to the <form> element in order to call the onSubmit callback prop.

// The onSubmit callback prop should only be called if both fields are filled in (with any value).
