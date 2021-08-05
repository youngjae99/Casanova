import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonToolbar, Form, FormGroup } from "react-bootstrap";

function App() {
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
      </Form>
    </div>
  );
}

export default App;
