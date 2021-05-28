import React, { Component } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {formatDate} from '../../helper/utils'

class EditTaskModal extends Component {
  constructor(props) {
    super(props);
    const {date} = props.data;
    this.state = {
      ...props.data, 
      date: date ? new Date(date) : new Date()
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
      date: formatDate(this.state.date.toISOString()),
    });
  };

  
  handleChangeDate = (value) => {
    this.setState({
      date: value || new Date()
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
             <DatePicker
              minDate={new Date()}
              selected={this.state.date}
              onChange={this.handleChangeDate}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={this.handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
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
