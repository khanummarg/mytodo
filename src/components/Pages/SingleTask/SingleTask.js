import React from "react";
import { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../../helper/utils";

class SingleTask extends Component {
  state = {
    task: null,
  };
  componentDidMount() {
    const taskId = this.props.match.params.taskId;

    fetch(`http://localhost:3001/task/${taskId}`, {
      method: "GET",
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
        this.setState({
          task: res,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  render() {
    const { task } = this.state;
    return (
      <div>
        <Container>
          <Row>
            <Col xs={8} className="m-3">
              {task ? (
                <Card>
                  <Card.Body>
                    <Card.Title>{task.title}</Card.Title>

                    <Card.Text>Description: {task.description}</Card.Text>
                    <Card.Text>Date: {formatDate(task.date)}</Card.Text>
                    <Button
                      variant="primary"

                      // onClick={() => onEdit(task)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                      className="m-2"
                      variant="danger"
                      // onClick={() => onDelete(task._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </Card.Body>
                </Card>
              ) : (
                <p>Task data not exist</p>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SingleTask;
