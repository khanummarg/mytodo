import React, { Component } from "react";
import {
  Button,
  Col,
  Row,
  Container,
  FormControl,
  InputGroup,
  Form,
} from "react-bootstrap";
import Task from "../Task/Task"
import idGenerator from "../../helper/idGenerator.js";


class Todo extends Component {
  state = {
    defaultvalue: "",
    tasks: [],
    selectedTask: new Set()
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

    const newTask = {
      _id: idGenerator(),
      title: defaultvalue,
    };

    const tasks = [newTask, ...this.state.tasks];

    this.setState({
      tasks: tasks,
      defaultvalue: "",
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
      selectedTask: new Set()
    })

  };


  render() {
    const { tasks, selectedTask } = this.state;

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
              <Form onSubmit={this.AddTask} className="mt-3">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Add task"
                    disabled={!!selectedTask.size}
                    value={this.state.defaultvalue}
                    onChange={this.handleChange}
                  />
                  <InputGroup.Append>
                    <Button type="submit" variant="outline-primary"
                     disabled={!!selectedTask.size}
                    >
                      Add task
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} xl={8}>
            <Button
            variant="danger"
            onClick={this.removeSelected}
            disabled={!selectedTask.size}
            >
              Delete selected
            </Button>
            </Col>
          </Row>
          <Row>{taskComponents}</Row>
        </Container>
      </div>
    );
  }
}

export default Todo;
