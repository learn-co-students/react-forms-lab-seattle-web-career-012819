import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      length: this.props.maxChars,
      text: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
        <p>{this.state.length - this.state.text.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
