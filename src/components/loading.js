import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

const LoadingScreen = (props) => {
  return (
    <div style={{ width: "100%", height:"100%", backgroundColor: "transparent" }}>
      <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p>AI가 생각중..</p>
    </div>
  );
};

export default LoadingScreen;
