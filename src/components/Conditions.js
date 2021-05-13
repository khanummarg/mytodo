import React, { Component } from "react";

class Conditions extends Component {
  state = {
    text1: "Hello",
    text2: "Bye",
    name: "Helen",
    showOrHide: false,
    showName: true,
  };

  showText = () => {
    this.setState({
      showOrHide: !this.state.showOrHide,
    });
  };

  toggleName = () => {
    this.setState({
      showName: !this.state.showName,
    });
  };

  render() {
    const { text1, text2, showOrHide, name, showName } = this.state;

    return (
      <div>
        <h2>{showOrHide ? <span>{text1}</span> : <span>{text2}</span>}</h2>
        {showName ? <h2>{name}</h2> : null}
        <button onClick={this.showText}>Show text</button>
        <button onClick={this.toggleName}>toggleName</button>
      </div>
    );
  }
}

export default Conditions;
