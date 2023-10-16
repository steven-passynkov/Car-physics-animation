import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <div style={{ marginTop: "16px" }}>
          <h1>Project Introduction</h1>
          <p>
            This project is a simulation of car physics animation. It aims to
            provide a visual representation of the principles of kinematics and
            motion in physics, specifically as they relate to the movement of
            cars.
          </p>
          <h2>The Importance of Kinematics and Motion in Physics</h2>
          <p>
            Kinematics and motion are fundamental concepts in physics that help
            us understand how objects move and interact with each other. By
            studying these principles, we can gain insights into the behavior of
            physical systems and develop models that accurately predict their
            movements.
          </p>
          <h2>Simulation Objectives</h2>
          <p>The objectives of this simulation are to:</p>
          <ul>
            <li>
              Provide a visual representation of the principles of kinematics
              and motion in physics
            </li>
            <li>
              Illustrate the movement of cars and how they interact with their
              environment
            </li>
            <li>
              Demonstrate the effects of different physical forces on the
              movement of cars, such as friction and gravity
            </li>
            <li>
              Allow users to interact with the simulation and explore different
              scenarios
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default About;
