import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";

const Equations: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <div style={{ marginTop: "16px" }}>
          <h1>Equations</h1>
          <p>
            This project is a simulation of car physics animation. It uses the
            following equations to calculate the position, velocity, and
            acceleration of the cars:
          </p>
          <h2>Displacement</h2>
          <p>
            To get the displacement I know what car one I can used the equation
            user input (px per second) * time (seconds).
          </p>
          <p>
            But car two is accelerating will have a changing displacement. So I
            used the equation user input (acclaration in terms of px) squared
            every second.
          </p>
          <h2>Velocity</h2>
          <p>
            To get the velocity I know that the car one is moving at a constant
            speed will have a constant velocity.
          </p>
          <p>
            But car two is accelerating will have a changing velocity. So I used
            the equation user input (acclaration in terms of px) * time
            (seconds).
          </p>
          <h2>Acceleration</h2>
          <p>
            To get the acceleration I know that car one that is moving at a
            constant speed will have a at fist an accelaration of the users
            input then go to zero.
          </p>
          <p>
            But car two is accelerating will have a constant acceleration which is
            the user input.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Equations;
