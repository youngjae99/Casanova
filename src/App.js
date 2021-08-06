import React, { useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import { Button, ButtonToolbar, Form, FormGroup, Spinner} from "react-bootstrap";

const App = () => {
  const [data, setData] = useState(null);
  const [spinner, showSpinner] = useState(false);

  const onClick = async () => {
    showSpinner(true);
    try {
      let bodyFormData = new FormData();
      bodyFormData.append("text", "내가 너를 많이 사랑해");
      bodyFormData.append("num_samples", 20);
      const response = await axios.post(
        "https://main-ko-gpt2-dino-fpem123.endpoint.ainize.ai/gen",
        bodyFormData,
        {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "multipart/form-data",
            accept: "application/json",
          },
        }
      );
      setData(response.data);
      showSpinner(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>어떤 말을 할 생각인가요?</Form.Label>
          <Form.Control type="text" placeholder="한나야 자니..?" />
          <Form.Text className="text-muted">
            상대에게 톡하기 전에, 제 생각을 들려줄께요
          </Form.Text>
        </Form.Group>
        <a
          onClick={onClick}
          class="btn btn-lg btn-secondary fw-bold border-white bg-white"
        >
          판단해줘!
        </a>
        <br/>
        {spinner && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>)
        }
        {data && (
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>분석 결과</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              value={JSON.stringify(data, null, 2)}
            />
          </Form.Group>
        )}
      </Form>
      <br />
    </div>
  );
};

export default App;
