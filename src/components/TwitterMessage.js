import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      charsRemaining: this.props.maxChars
    };
  }

  handleChange = (event) => {
    if (event.target.value.length <= this.props.maxChars) {
      this.setState({
        [event.target.name]: event.target.value,
        charsRemaining: this.props.maxChars - event.target.value.length
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state['message']}
          onChange = {this.handleChange}
        />
        <p>{this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
