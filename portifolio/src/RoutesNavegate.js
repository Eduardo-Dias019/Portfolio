import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RoutesNavegate = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/linkedin" element="https://br.linkedin.com/in/eduardo-dias-621b4b220"/>
          <Route path="/github" element="https://github.com/Eduardo-Dias019" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutesNavegate;
