import React, { Component, createRef } from "react";

export default class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val2: "",
    };
    this.inputRef = createRef();
  }

  componentDidMount(){
      this.inputRef.current.focus();
  }

  handleChange = (event) => {
    this.setState({
      val2: event.target.value,
    });
  };

  handleSubmit = () => {
    console.log("val1", this.inputRef.current.value);
    console.log("val2", this.state.val2);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input
          type="text"
          value={this.state.val2}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Click me</button>
      </div>
    );
  }
}
