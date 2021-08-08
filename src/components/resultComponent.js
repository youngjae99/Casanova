import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";

const ResultComponent = (props) => {
  return (
    <div>
        <div>
            <h3>{props.score}점짜리 멘트</h3>
            <ProgressBar now={props.score} label={`${props.score}점`} /><br/>
            <p>이렇게 대신 말해봐도 좋을 것 같아요</p><h4>{props.similar}</h4>
        </div>
    </div>
  );
};

export default ResultComponent;
