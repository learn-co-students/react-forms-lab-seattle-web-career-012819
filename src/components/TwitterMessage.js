import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      chars: this.props.maxChars,
      message: '' 
    };
  }

  handleChange = (e) => {
    this.setState({
      chars: this.props.maxChars - e.target.value.length,
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message"
          onChange={this.handleChange}  
          value={this.state.message}
        />
        <p>Remaining characters {this.state.chars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
