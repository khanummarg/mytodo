import React, { Component } from "react";
import { Button, Card, Form } from "react-bootstrap";
import styles from "./taskStyle.module.css"

class Task extends Component {
    state={
        selected: false
    }

    handleChange = () => {
        const {data, onToggle} = this.props;
        onToggle(data._id);
        this.setState({
            selected: !this.state.selected
        })
    }

  render() {
    const task = this.props.data;
    const { disabled, onDelete } = this.props; 
    const {selected} = this.state;
    return (
      <Card className={`mt-3 ${selected ? styles.selected : ""}`}>
        <Card.Body>
          <Form.Check onChange={this.handleChange} />
          <Card.Title>{task.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            variant="danger"
            disabled={disabled}
            onClick={() => onDelete(task._id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Task;
