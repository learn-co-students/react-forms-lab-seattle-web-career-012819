import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleKeyPress = (ev) => {
    this.setState({
      message: ev.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={ev => this.handleKeyPress(ev)} value={this.state.message}/>
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
