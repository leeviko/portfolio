import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const AppRoutes = () => {
  const currentPage = useLocation();

  return (
    <div className="container">
      <div className="wrapper">
        <Nav currentPage={currentPage.pathname} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="" replace={true} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
