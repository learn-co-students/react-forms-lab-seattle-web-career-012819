import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessage = (ev) =>{
    this.setState({
      message: ev.target.value
    })
  }
  render() {
    return (
      <div>
        {this.props.maxChars-this.state.message.length}
        <strong>Your message:</strong>
        <input type="text" onChange ={event => this.handleMessage(event)} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
