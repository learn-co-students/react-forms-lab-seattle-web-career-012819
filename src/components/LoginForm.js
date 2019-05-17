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
      let nameValid = false
      // event.preventDefault()
      this.setState({
        username: event.target.value
      }, () => {
          console.log("before callback", nameValid, this.state.username.length)
          this.setState({
            nameValid: this.state.username.length > 0 ? nameValid = true : nameValid
          })
        })
    }
  }

  validatePassword = (event) => {
    if (event !== undefined) {
      let passwordValid = false
      // event.preventDefault()
      this.setState({
        password: event.target.value
      }, () => {
          console.log("before callback", passwordValid, this.state.password.length)
          this.setState({
            passwordValid: this.state.password.length > 0 ? passwordValid = true : passwordValid
          })
        })
    }
  }

  canSubmit = () => {
    console.log("Name: " + this.state.nameValid + " and Password: " + this.state.passwordValid)
    if (this.state.nameValid && this.state.passwordValid){
      return <button type="submit">Log in</button>
    } else {
      return <p>All fields must be filled before submission</p>
    }
  }

  handleSubmit =(event) => {
    event.preventDefault()
    let username = event.target.elements['username'].value
    let password = event.target.elements['password'].value          
    
    //callback function that is used in App - passing in an object
    this.props.handleLogin({
      [event.target.elements['username'].name]:username, 
      [event.target.elements['password'].name]:password
      })

  }

  render() {
    return (
      <form onSubmit={(event) => {
        console.log(event)
        event.preventDefault()
          let username = event.target.elements['username'].value
          let password = event.target.elements['password'].value          
          
          //callback function that is used in App - passing in an object
          this.props.handleLogin({
            [event.target.elements['username'].name]:username, 
            [event.target.elements['password'].name]:password
            })
          }
      }>
      {/* <form onSubmit={this.handleSubmit}> */}
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.validateName}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.validatePassword}/>
          </label>
        </div>
        <div>
          {this.canSubmit()}
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
