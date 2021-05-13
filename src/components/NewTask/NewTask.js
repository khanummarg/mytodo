import React, { Component } from 'react';
import {
    Button,
    FormControl,
    InputGroup,
    Form
  } from "react-bootstrap";
  import idGenerator from "../../helper/idGenerator.js";
  import PropTypes from 'prop-types';


class NewTask extends Component {
    state={
        title: "",
        description: ""
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
    
        const title = this.state.title.trim();
        const description = this.state.description.trim();
    
        if (!title) {
          return;
        }
    
        const newTask = {
          _id: idGenerator(),
          title: title,
        //   description: description
        };

        this.props.onAdd(newTask);

        this.setState({
            title: "",
            // description: ""
        })
    };
    
    render() {
        const {title, description} = this.state;
        const {disabled} = this.props;

        return(
            <>
            <Form onSubmit={this.handleSubmit} className="mt-3">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Title"
                    disabled={disabled}
                    value={title}
                    onChange={this.handleChange}
                  />
                  <InputGroup.Append>
                    <Button type="submit" variant="outline-primary"
                     disabled={disabled}
                    >
                      Add task
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
              </>
        )
    }
}

NewTask.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired,

};
export default NewTask;