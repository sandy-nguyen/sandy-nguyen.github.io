import Garden from "./Garden";
import Manifesto from "./Manifesto";
import "./app.scss";
import React, { Component }  from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import { useState, useEffect } from "react";
import MongoDb from "./mongodb";
function App() {
    const [selectedSection, setSelectedSection] = useState("intro");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  }
  return (
    <>
      <Router>
        <React.Fragment>
          <Navbar
            {...{
              isMobile,
              selectedSection,
              isMobile,
              setSelectedSection,
              handleSectionChange,
            }}
          />
        </React.Fragment>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Garden
                {...{
                  selectedSection,
                  isMobile,
                  setSelectedSection,
                  handleSectionChange,
                }}
              />
            }
          />{" "}
          <Route
            path="/garden"
            element={
              <Garden
                {...{
                  selectedSection,
                  isMobile,
                  setSelectedSection,
                  handleSectionChange,
                }}
              />
            }
          />
          <Route path="manifesto" element={<Manifesto />} />
          <Route path="mongodb" element={<MongoDb />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
