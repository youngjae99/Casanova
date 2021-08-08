import React from "react";
import { Form } from "react-bootstrap";

const FirstSlide = (props) => {
  const onChange = (e) => {
    props.setInput(e.target.value);
  };

  const keypress = (event) => {
    if (event.keyCode === 13) {
      props.onClick();
    }
  };

  return (
    <div style={{ width: "100%", height: 300, backgroundColor: "transparent" }}>
      <div>
        <Form.Label>어떤 말을 하려 하나요?</Form.Label>
        <Form.Control
          id="inputbox"
          type="text"
          placeholder="자니? 보고싶다.."
          value={props.input}
          onChange={onChange}
          onKeyDown={(e) => keypress(e)}
          required
        />
        
        <br />
        <a
          class="btn btn-lg btn-secondary fw-bold border-white bg-white"
          variant="light"
          onClick={props.onClick}
        >
          판단해줘!
        </a>
      </div>
    </div>
  );
};

export default FirstSlide;
