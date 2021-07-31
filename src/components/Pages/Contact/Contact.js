import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import styles from "./contactStyle.module.css";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    message: null,
  });

  const handleChange = ({ target: { name, value } }) => {
    if (!value) {
      setErrors({
        ...errors,
        [name]: "Field is required",
      });
    } else {
      setErrors({
        ...errors,
        [name]: null,
      });
    }

    if (name === "email" && value) {
      const emailReg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!emailReg.test(value)) {
        setErrors({
          ...errors,
          email: "Invalid email",
        });
      }
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handeleSubmit = () => {
    const errorsArr = Object.values(errors);
    const errorsExist = !errorsArr.every((el) => el === null);
    const valuesArr = Object.values(values);
    const valuesExist = !valuesArr.some((el) => el === "");

    if (valuesExist && !errorsExist) {
     
      fetch("http://localhost:3001/form", {
        method: "POST",
        body: JSON.stringify(values),
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
          console.log("Send sussesfully");
// 



         
        })
        .catch((error) => {
          console.log("error", error);
        });
























      return;
    }
 

  if(!valuesExist && !errorsExist) {
    setErrors({
      name: 'Field is required',
      email: 'Field is required',
      message: 'Field is required'
    });
  }
};


  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={8} md={6}>
          <Form className="mt-5">
            <h2 className="text-center">Contact us</h2>
            <Form.Group className="mb-3">
              <Form.Control
                className={errors.name ? styles.invalid : ""}
                type="text"
                placeholder="Enter your name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <Form.Text className="text-danger">{errors.name}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                className={errors.email ? styles.invalid : ""}
                type="email"
                placeholder="Enter your email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <Form.Text className="text-danger">{errors.email}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                className={errors.message ? styles.invalid : ""}
                as="textarea"
                value={values.message}
                rows={6}
                placeholder="Enter your message"
                name="message"
                onChange={handleChange}
              />
              <Form.Text className="text-danger">{errors.message}</Form.Text>
            </Form.Group>
            <div className="text-center">
              <Button
                className={styles.submitButton}
                variant="primary"
                onClick={handeleSubmit}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
