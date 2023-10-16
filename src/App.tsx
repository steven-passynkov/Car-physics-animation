import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppContextProvider from "./contexts/AppContext";
import Home from "./pages/Home";
import PracticalApplication from "./pages/PracticalApplication";
import Equations from "./pages/Equations";
import About from './pages/About';
import "./App.css";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practical-application" element={<PracticalApplication />} />
          <Route path="/equations" element={<Equations />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
