import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

const LoadingScreen = (props) => {
  return (
    <div style={{ width: "100%", backgroundColor: "transparent"}}>
      <div style={{padding: "50px"}}>
      <Spinner animation="border" role="status" style={{margin: "10px"}}>
            <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p>AI가 판단 중..</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
