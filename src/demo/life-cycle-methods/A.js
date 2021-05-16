import React, { Component } from "react";

class A extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
    console.log("A constructor");
  }

  handleChange = (event) => {
      this.setState({
          value: event.target.value
      });
  };

  componentDidMount(){
    console.log("A componentDidMount");
  }

  render() {
      console.log("A render");
    return (
      <div>
        <h4>A Component</h4>
        <input 
        type="text"
        value = {this.state.value}
        onChange = {this.handleChange}
        />        
      </div>
    );
  }
}

export default A;
