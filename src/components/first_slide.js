import React, { useState } from "react";
import { Form } from "react-bootstrap";

const FirstSlide = (props) => {
  const [input, setInput] = useState(null);
  const [data, setData] = useState(null);
  const [spinner, showSpinner] = useState(false);

  const onChange = (e) => {
    //setInput(e.target.value);
    props.setInput(e.target.value);
  };

  const keypress=(event)=> {
    if (event.keyCode === 13) {
        props.onClick();
    }
}

  return (
    <div style={{ width: "100%", height: 300, backgroundColor: "transparent" }}>
      <div>
        <Form.Label>어떤 말을 할 생각인가요?</Form.Label>
        <Form.Control
          type="text"
          placeholder="한나야 자니..?"
          value={input}
          onChange={onChange}
          onKeyDown={(e) => keypress(e) }
        />
        <Form.Text className="text-muted">
          상대에게 톡하기 전에, 제 생각을 들려줄께요
        </Form.Text>
        <br />
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
