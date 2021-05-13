import React, { Component } from "react";
import {
  Button,
  Col,
  Row,
  Container
} from "react-bootstrap";
import Task from "../Task/Task"
import NewTask from "../NewTask/NewTask"
import Confirm from "../Confirm/Confirm"



class Todo extends Component {
  state = {
    tasks: [],
    selectedTask: new Set(),
    showConfirm: false
  };

 
  addTask = (newTask) => {
  
    const tasks = [newTask, ...this.state.tasks];

    this.setState({
      tasks: tasks
    });
  };

  // handleDelete = () => {
  //   this.setState({
  //     tasks: [],
  //   });
  // };

  deleteTask = (taskId) => {
    const newTasks = this.state.tasks.filter((task) => taskId !== task._id);

    this.setState({
      tasks: newTasks,
    });
  };

  toogleTask = (taskId) => {
    const selectedTask = new Set(this.state.selectedTask);
    if (selectedTask.has(taskId)) {
      selectedTask.delete(taskId);
    }
    else {
      selectedTask.add(taskId);
    }

    this.setState({
      selectedTask: selectedTask
      // or selectedTask
    });
  };

  removeSelected = () => {
    const {selectedTask, tasks} = this.state;
       
    const newTasks = tasks.filter((task)=>{
      if(selectedTask.has(task._id)){
        return false;
      }
      return true;
    });

    this.setState({
      tasks: newTasks,
      selectedTask: new Set(),
      showConfirm: false
    })

  };

  toogleConfirm =() => {
    this.setState({
      showConfirm: !this.state.showConfirm
    });
  }

  render() {
    const { tasks, selectedTask, showConfirm } = this.state;

    const taskComponents = tasks.map((task) => {
      return (
        <Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2}>
         <Task 
         data={task} 
         disabled={!!selectedTask.size}
         onToggle = {this.toogleTask}
         onDelete = {this.deleteTask}
          />
        </Col>
      );
    });
    // const li = tasks.map((task, index) => {
    //   return <li key={index} className={index===2 ? styles.selected : null}>{task}</li>;
    // });
    return (
      <div>
        {/* <form onSubmit={this.AddTask}>
          <input
            type="text"
            value={this.state.defaultvalue}
            onChange={this.handleChange}
          />
          <button type="submit">Add text</button>
          <button type="button" onClick={this.handleDelete}>
            Delete All
          </button>
        </form> */}

        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} xl={8}>
              <NewTask
              disabled={!!selectedTask.size}
              onAdd = {this.addTask}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} xl={8}>
            <Button
            variant="danger"
            onClick={this.toogleConfirm}
            disabled={!selectedTask.size}
            >
              Delete selected
            </Button>
            </Col>
          </Row>
          <Row>{taskComponents}</Row>
        </Container>
        {showConfirm && 
        <Confirm 
        onClose = {this.toogleConfirm}
        onConfirm = {this.removeSelected}
        count = {selectedTask.size}
        />}
      </div>
    );
  }
}

export default Todo;
