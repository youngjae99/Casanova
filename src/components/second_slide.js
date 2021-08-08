import React, { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import LoadingScreen from "./loading";

const SecondSlide = (props) => {
  return (
    <div style={{ width: "100%", height: 300, backgroundColor: "transparent" }}>
      <div>{props.spinner && <LoadingScreen />}</div>
      {props.data && (
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>분석 결과는...</Form.Label>
          <Form.Control
            as="textarea"
            rows={7}
            value={JSON.stringify(props.data, null, 2)}
          />
          <a
            class="btn btn-lg btn-secondary fw-bold border-white bg-white"
            variant="light"
            onClick={props.restart}
          >
            다시하기
          </a>
        </Form.Group>
      )}
    </div>
  );
};

export default SecondSlide;
