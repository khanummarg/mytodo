import React, { Component } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import idGenerator from "../../helper/idGenerator.js";
import PropTypes from "prop-types";

class NewTask extends Component {
  state = {
    title: "",
    description: "",
  };

  handleChange = (e) => {
    
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const title = this.state.title.trim();
    const description = this.state.description.trim();

    if (!title) {
      return;
    }

    const newTask = {
      _id: idGenerator(),
      title: title,
      description: description,
    };

    this.props.onAdd(newTask);
  };

  render() {
    const { onClose } = this.props;

    return (
      <>
        <Modal
          show={true}
          onHide={onClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add new task
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl
              className="mb-3"
              placeholder="Title"
              name="title"
              onChange={this.handleChange}
            />
            <FormControl
              as="textarea"
              rows={5}
              className="mb-3"
              placeholder="Description"
              name="description"
              onChange={this.handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={this.handleSubmit}>
              Add
            </Button>
            <Button onClick={onClose}>Cancele</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

NewTask.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default NewTask;
