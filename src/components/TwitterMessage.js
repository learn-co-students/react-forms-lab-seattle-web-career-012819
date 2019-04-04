import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {value: ''};
  }

  handleChange = (ev) => {
    this.setState({
      value: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          name="message"
          id="message"
          value={this.state.value}
          onChange={this.handleChange}
          maxChars={this.props.maxChars}
           />
         <p>
           Remaining Characters: {this.props.maxChars - this.state.value.length}
         </p>
      </div>
    );
  }
}

export default TwitterMessage;
