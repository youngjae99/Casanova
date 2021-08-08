import React from "react";
import { Form } from "react-bootstrap";
import LoadingScreen from "./loading";
import ResultComponent from "./resultComponent";

const SecondSlide = (props) => {
  return (
    <div style={{ width: "100%", height: 300, backgroundColor: "transparent" }}>
      <div>{props.spinner && <LoadingScreen />}</div>
      {props.data && (
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <ResultComponent score={props.score} similar={props.similar}/>
          <br/>
          <div
            class="btn btn-lg btn-secondary fw-bold border-white bg-white"
            variant="light"
            onClick={props.restart}
          >
            <i class="fas fa-redo-alt"></i> 다시하기
          </div>
        </Form.Group>
      )}
    </div>
  );
};

export default SecondSlide;
