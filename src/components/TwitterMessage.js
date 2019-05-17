import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)

    this.state = {};
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      characterCount: (this.props.maxChars - event.target.value.length)
    }, () => console.log("Message: ", this.state.message + "\n Char Count: ", this.state.characterCount))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <p>Characters Remaining: {this.state.characterCount || this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;


//Notes

// Open the components/TwitterMessage.js file.

// This component takes one prop: maxChars which is a number — the maximum amount of characters a message can have. This prop is being passed in from the App component with the value 140.

// You'll find an <input type="text"> in this component. Make this a controlled component by adding the attributes to the <input> element. Its value should be saved in the component's state and should update on every change to the input.

// Show the remaining characters in the component. It doesn't matter how you render it, as long as the number is correct. No need to guard against input that is too long — you can let the counter reach negative values.
