import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { AppContext } from "./contexts/AppContext";
import AppContextProvider from "./contexts/AppContext";
import Navbar from "./components/Navbar";
import Forms from "./components/Forms";
import Car from "./components/Car";
import Charts from "./components/Charts";
import "./App.css";

const AppContainer = () => {
  const { carOnePosition, carTwoPosition } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <div className="App">
        <Forms />
        <Container id="track" fluid>
          <Row style={{ backgroundColor: "#ccc" }}>
            <Car position={carOnePosition} />
          </Row>
          <Row style={{ backgroundColor: "#ccc" }}>
            <Car position={carTwoPosition} />
          </Row>
        </Container>
        <Container id="charts" fluid>
          <Row>
            <Charts dataType="distance" unit="px" />
            <Charts dataType="velocity" unit="px/s"/>
            <Charts dataType="acceleration" unit="px/s²" />
          </Row>
        </Container>
      </div>
    </>
  );
};

function App() {
  return (
    <AppContextProvider>
      <AppContainer />
    </AppContextProvider>
  );
}

export default App;
