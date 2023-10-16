import React from "react";
import Navbar from "../components/Navbar";

const Equations: React.FC = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Equations</h1>
        <p>
          This project is a simulation of car physics animation. It uses the
          following equations to calculate the position, velocity, and
          acceleration of the cars:
        </p>
        <h2>Displacement</h2>
        <p>
          To get the displacement I used the equation user input (px per second or acclaration in terms of px) * time (seconds).
        </p>
        <h2>Velocity</h2>
        <p>
            To get the velocity I know that the car that is moving at a constant speed will have a constant velocity. But the car that is accelerating will have a changing velocity. So I used the equation user input (acclaration in terms of px) * time (seconds).
        </p>
        <h2>Acceleration</h2>
        <p>
            To get the acceleration I know that the car that is moving at a constant speed will have a at fist an accelaration of the users input then go to zero. But the car that is accelerating will have a constant aclaration which is its user input.
        </p>
      </div>
    </>
  );
};

export default Equations;