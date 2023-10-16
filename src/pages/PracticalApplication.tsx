import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";

const PracticalApplication: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <div style={{ marginTop: "16px" }}>
          <h1>Practical Application</h1>
          <p>
            This project has a practical application in the field of physics by
            ploting and being able to visualise the difference between velocity
            per second and acceleration per second.
          </p>
        </div>
      </Container>
    </>
  );
};

export default PracticalApplication;
