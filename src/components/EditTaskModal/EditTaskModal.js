import React, { Component } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

class EditTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.data,
    };
  }

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

    this.props.onSave({
      _id: this.state._id,
      title,
      description,
    });
  };

  render() {
    const { onClose } = this.props;
    const { title, description } = this.state;

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
              Edit the task
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl
              className="mb-3"
              placeholder="Title"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <FormControl
              as="textarea"
              rows={5}
              className="mb-3"
              placeholder="Description"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={this.handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancele</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

EditTaskModal.propTypes = {
  data: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};
export default EditTaskModal;
