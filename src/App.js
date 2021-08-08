import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { Form } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import FirstSlide from "./components/first_slide.js";
import SecondSlide from "./components/second_slide.js";

const App = () => {
  const [input, setInput] = useState(null);
  const [data, setData] = useState(null);
  const [spinner, showSpinner] = useState(false);
  const [index, setIndex] = useState(0); // carousel page index

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    console.log("handleSelect", selectedIndex);
  };

  const restart = async () => {
    setIndex(0);
    setInput("");
  };

  const onClick = async () => {
    setIndex(1);
    console.log("text:", input);
    if(input==null){
      return "none";
    }
    showSpinner(true);
    try {
      let bodyFormData = new FormData();
      bodyFormData.append("text", input);
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
      console.log(response.data)
      setData(response.data["1"]["text_b"].replace("\"", ""));
      showSpinner(false);
    } catch (e) {
      console.log(e);
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const parseResult = (e) => {
    console.log("parseResult in!");
  };

  const getTextValue = (e) => {
    onclick();
  };

  return (
    <div className="App">
      <div>
        <Carousel
          controls={false}
          indicators={false}
          activeIndex={index}
          onSelect={handleSelect}
          interval={null}
        >
          <Carousel.Item>
            <FirstSlide onClick={onClick} setInput={setInput} />
          </Carousel.Item>

          <Carousel.Item>
            <SecondSlide spinner={spinner} data={data} restart={restart} score={30} similar={data}/>
          </Carousel.Item>
        </Carousel>
        <br />
      </div>
      <br />
    </div>
  );
};

export default App;
