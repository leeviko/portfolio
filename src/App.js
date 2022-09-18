import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

const About = React.lazy(() => import("./components/About"));
const Skills = React.lazy(() => import("./components/Skills"));
const Projects = React.lazy(() => import("./components/Projects"));

const AppRoutes = () => {
  const currentPage = useLocation();

  return (
    <div className="container">
      <div className="wrapper">
        <Nav currentPage={currentPage.pathname} />
        <Suspense>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="" replace={true} />} />
          </Routes>
        </Suspense>
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
