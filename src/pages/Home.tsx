import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { AppContext } from "../contexts/AppContext";
import Navbar from "../components/Navbar";
import Forms from "../components/Forms";
import Car from "../components/Car";
import Charts from "../components/Charts";
import "../App.css";

const Home: React.FC = () => {
  const { carOnePosition, carTwoPosition } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <div className="App">
        <Forms />
        <Container fluid>
          <Row style={{ backgroundColor: "#ccc" }}>
            <Car position={carOnePosition} />
          </Row>
          <Row style={{ backgroundColor: "#ccc" }}>
            <Car position={carTwoPosition} />
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Charts dataType="displacement" unit="px" />
            <Charts dataType="velocity" unit="px/s" />
            <Charts dataType="acceleration" unit="px/s²" />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
