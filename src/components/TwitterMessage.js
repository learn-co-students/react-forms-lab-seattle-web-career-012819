import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      maxChars: 140
    };
  }

  handleMessage = (event) => {
    this.setState({
      message: event.target.value,
    })
    console.log(this.state.message)
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleMessage} value={this.state.message}/>
          {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
