import React, { PureComponent } from "react";
import { Button, Card, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import styles from "./taskStyle.module.css";

class Task extends PureComponent {

  handleChange = () => {
    const { data, onToggle } = this.props;
    onToggle(data._id);
  };

  render() {
    const task = this.props.data;
    const { disabled, onDelete, selected, onEdit } = this.props;

    return (
      <Card className={`mt-3 ${selected ? styles.selected : ""}`}>
        <Card.Body>
          <Form.Check onChange={this.handleChange} checked={selected} />
          <Card.Title>{task.title}</Card.Title>
          <Card.Text>{task.description}</Card.Text>
          <Button
            variant="primary"
            disabled={disabled}
            onClick={() => onEdit(task)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>
          <Button className="m-2"
            variant="danger"
            disabled={disabled}
            onClick={() => onDelete(task._id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

Task.propTypes = {
  data: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Task;
