import React from "react";
import Navbar from "../components/Navbar";

const PracticalApplication: React.FC = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Practical Application</h1>
        <p>
          This project has a practical application in the field of physics by
          ploting and being able to vissulise the diffrence between displacement
          per second and acclaration per second.
        </p>
      </div>
    </>
  );
};

export default PracticalApplication;