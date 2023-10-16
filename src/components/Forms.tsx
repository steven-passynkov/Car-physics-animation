import { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { AppContext } from "../contexts/AppContext";
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";

interface MyFormValues {
  carOne: number | string;
  carTwo: number | string;
}

const Forms: React.FC<{}> = ({}) => {
  const { updateCarPosition } = useContext(AppContext);

  const [validationErrors, setValidationErrors] = useState<{
    carOne?: string;
    carTwo?: string;
  }>({});

  const validateFields = (values: MyFormValues) => {
    const errors: { carOne?: string; carTwo?: string } = {};

    if (!values.carOne) {
      errors.carOne = "Car One is required";
    } else if (isNaN(Number(values.carOne)) || Number(values.carOne) < 0) {
      errors.carOne = "Car One must be a non-negative number";
    }

    if (!values.carTwo) {
      errors.carTwo = "Car Two is required";
    } else if (isNaN(Number(values.carTwo)) || Number(values.carTwo) < 0) {
      errors.carTwo = "Car Two must be a non-negative number";
    }

    return errors;
  };

  const accelerateCars = (values: MyFormValues) => {
    const errors = validateFields(values);
    if (Object.keys(errors).length === 0) {
      setValidationErrors({});
      updateCarPosition(values.carOne, values.carTwo);
    } else {
      setValidationErrors(errors);
    }
  };

  const schema = yup.object().shape({
    carOne: yup.number().min(0, "Car One must be >= 0").nullable(),
    carTwo: yup.number().min(0, "Car Two must be >= 0").nullable(),
  });

  return (
    <Container fluid style={{ marginBottom: "150px" }}>
      <Formik
        validationSchema={schema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={console.log}
        initialValues={{
          carOne: "",
          carTwo: "",
        }}
      >
        {(formikProps) => (
          <Form noValidate onSubmit={formikProps.handleSubmit}>
            <Row style={{ marginBottom: "16px" }}>
              <Col>
                <Form.Group
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Form.Label>Velocity</Form.Label>
                  <InputGroup className="mb-2">
                    <Field
                      type="number"
                      name="carOne"
                      placeholder="Car One"
                      className="form-control"
                    />
                    <InputGroup.Text>px/s</InputGroup.Text>
                  </InputGroup>
                  <ErrorMessage
                    name="carOne"
                    component="div"
                    className="error"
                  />
                  {validationErrors.carOne && (
                    <div className="error">{validationErrors.carOne}</div>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="validationFormik102"
                  className="position-relative"
                >
                  <Form.Label>Acceleration</Form.Label>
                  <InputGroup className="mb-2">
                    <Field
                      type="number"
                      name="carTwo"
                      placeholder="Car Two"
                      className="form-control"
                    />
                    <InputGroup.Text>px/s²</InputGroup.Text>
                  </InputGroup>
                  <ErrorMessage
                    name="carTwo"
                    component="div"
                    className="error"
                  />
                  {validationErrors.carTwo && (
                    <div className="error">{validationErrors.carTwo}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={() => accelerateCars(formikProps.values)}>
                  Accelerate
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Forms;
