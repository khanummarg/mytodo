import React, { Component } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import Task from "../../Task/Task";
import NewTask from "../../NewTask/NewTask";
import Confirm from "../../Confirm/Confirm";
import EditTaskModal from "../../EditTaskModal/EditTaskModal";
import {connect} from "react-redux";
import request from "../../../helper/request"

class Todo extends Component {
  state = {
    // tasks: [],
    selectedTask: new Set(),
    showConfirm: false,
    openNewTaskModal: false,
    editTask: null,
  };

  componentDidMount() {
    this.props.getTasks();

  }

  addTask = (newTask) => {
    fetch("http://localhost:3001/task", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const res = await response.json();

        if (response.status >= 400 && response.status < 600) {
          if (res.error) {
            throw res.error;
          } else {
            throw new Error("Something went wrong!");
          }
        }

        const tasks = [res, ...this.state.tasks];

        this.setState({
          tasks: tasks,
          openNewTaskModal: false,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  deleteTask = (taskId) => {
    fetch(`http://localhost:3001/task/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const res = await response.json();
        console.log("res", res);

        if (response.status >= 400 && response.status < 600) {
          if (res.error) {
            throw res.error;
          } else {
            throw new Error("Something went wrong!");
          }
        }

        const newTasks = this.state.tasks.filter((task) => taskId !== task._id);

        this.setState({
          tasks: newTasks,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  toogleTask = (taskId) => {
    const selectedTask = new Set(this.state.selectedTask);
    if (selectedTask.has(taskId)) {
      selectedTask.delete(taskId);
    } else {
      selectedTask.add(taskId);
    }

    this.setState({
      selectedTask: selectedTask,
    });
  };

  removeSelected = () => {
    const { selectedTask, tasks } = this.state;

    const body = {
      tasks: [...selectedTask],
    };

    fetch(`http://localhost:3001/task`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const res = await response.json();
        console.log("res", res);

        if (response.status >= 400 && response.status < 600) {
          if (res.error) {
            throw res.error;
          } else {
            throw new Error("Something went wrong!");
          }
        }

        const newTasks = tasks.filter((task) => {
          if (selectedTask.has(task._id)) {
            return false;
          }
          return true;
        });

        this.setState({
          tasks: newTasks,
          selectedTask: new Set(),
          showConfirm: false,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  toogleConfirm = () => {
    this.setState({
      showConfirm: !this.state.showConfirm,
    });
  };

  selectAll = () => {
    const taskIds = this.state.tasks.map((task) => task._id);

    this.setState({
      selectedTask: new Set(taskIds),
    });
  };

  deSelectAll = () => {
    this.setState({
      selectedTask: new Set(),
    });
  };

  toggleNewTaskModal = () => {
    this.setState({
      openNewTaskModal: !this.state.openNewTaskModal,
    });
  };

  handleEdit = (editTask) => {
    this.setState({
      editTask: editTask,
    });
  };

  handleSaveTask = (editedTask) => {
    fetch(`http://localhost:3001/task/${editedTask._id}`, {
      method: "PUT",
      body: JSON.stringify(editedTask),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const res = await response.json();
        console.log("res", res);

        if (response.status >= 400 && response.status < 600) {
          if (res.error) {
            throw res.error;
          } else {
            throw new Error("Something went wrong!");
          }
        }

        const tasks = [...this.state.tasks];
        const foundIndex = tasks.findIndex(
          (task) => task._id === editedTask._id
        );

        tasks[foundIndex] = editedTask;

        this.setState({
          tasks,
          editTask: null
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  render() {
    const { selectedTask, showConfirm, openNewTaskModal, editTask } =
      this.state;
      const {tasks} = this.props;



    const taskComponents = tasks.map((task) => {
      return (
        <Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Task
            data={task}
            disabled={!!selectedTask.size}
            onToggle={this.toogleTask}
            onDelete={this.deleteTask}
            selected={selectedTask.has(task._id)}
            onEdit={this.handleEdit}
          />
        </Col>
      );
    });

    return (
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} xl={8}>
              <Button variant="primary" onClick={this.toggleNewTaskModal}>
                Add task
              </Button>
              <Button
                className="m-3"
                variant="success"
                onClick={this.selectAll}
              >
                Select All
              </Button>
              <Button variant="warning" onClick={this.deSelectAll}>
                Deselect All
              </Button>
              <Button
                className="m-3"
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
        {showConfirm && (
          <Confirm
            onClose={this.toogleConfirm}
            onConfirm={this.removeSelected}
            count={selectedTask.size}
          />
        )}
        {openNewTaskModal && (
          <NewTask onClose={this.toggleNewTaskModal} onAdd={this.addTask} />
        )}
        {editTask && (
          <EditTaskModal
            data={editTask}
            onClose={() => this.handleEdit(null)}
            onSave={this.handleSaveTask}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    tasks: state.tasks
  };
};

// const mapDispatchToProps=(dispatch) => {
//   return {
//     getTasks: () => {
//       request('http://localhost:3001/task')
//       .then((tasks)=> {
//         dispatch({type: 'GET_TASKS', tasks: tasks});
//       })
//     }
//   };
// };


const mapDispatchToProps= {
    getTasks: () => {
      return (dispatch) =>{
      request('http://localhost:3001/task')
      .then((tasks)=> {
        dispatch({type: 'GET_TASKS', tasks: tasks});
      })
    }
  }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
