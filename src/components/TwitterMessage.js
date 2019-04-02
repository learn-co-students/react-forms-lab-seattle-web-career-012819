import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersRemaining: this.props.maxChars
    };
  }

  handleKeyUp = (ev) => {
    const messageLength = ev.target.value.length
    this.setState((_, props) => {
      return {charactersRemaining: props.maxChars - messageLength}
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleKeyUp}/>
        <p>{this.state.charactersRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
