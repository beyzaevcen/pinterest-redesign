import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
