import React, { Component } from "react";

class Todo extends Component {
  state = {
    defaultvalue: "",
    tasks: [],
  };

  handleChange = (e) => {
    this.setState({
      defaultvalue: e.target.value,
    });
  };
  AddTask = (e) => {
    e.preventDefault();

    const defaultvalue = this.state.defaultvalue.trim();

    if (!defaultvalue) {
      return;
    }

    const tasks = [...this.state.tasks, defaultvalue];

    this.setState({
      tasks: tasks,
      defaultvalue: "",
    });
  };

  handleDelete = () => {
    this.setState({
      tasks: [],
    });
  };

  render() {
    const { tasks } = this.state;
    const li = tasks.map((task, index) => {
      return <li key={index}>{task}</li>;
    });
    return (
      <div>
        <form onSubmit={this.AddTask}>
          <input
            type="text"
            value={this.state.defaultvalue}
            onChange={this.handleChange}
          />
          <button type="submit">Add text</button>
          <button type="button" onClick={this.handleDelete}>
            Delete All
          </button>
          <ol>{li}</ol>
        </form>
      </div>
    );
  }
}

export default Todo;
