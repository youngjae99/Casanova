import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import FirstSlide from "./components/first_slide.js";
import SecondSlide from "./components/second_slide.js";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [input, setInput] = useState(null);
  const [data, setData] = useState(null);
  const [hate, setHate] = useState(null);
  const [offensive, setOffense] = useState(null);
  const [spinner, showSpinner] = useState(false);
  const [index, setIndex] = useState(0); // carousel page index

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    console.log("handleSelect", selectedIndex);
  };

  const restart = async () => {
    setInput(null);
    Array.from(document.querySelectorAll("#inputbox")).forEach(
      input => (input.value = "")
    );
    setData(null);
    setIndex(0);
  };

  const onClick = async (event) => {
    if(input==null){
      return "none";
    }
    setIndex(1);
    console.log("text:", input);
    showSpinner(true);
    try {
      let bodyFormData = new FormData();
      bodyFormData.append("text", input);
      bodyFormData.append("num_samples", 10);
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
      const response2 = await axios.post(
        "https://master-soongsil-bert-base-beep-deploy-jason9693.endpoint.ainize.ai/predict/logits",
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
      console.log(response2.data["result"])

      if(response.data["1"]!=null) setData(response.data["1"]["text_b"].replace("\"", ""));
      else if(response.data["2"]!=null) setData(response.data["2"]["text_b"].replace("\"", ""));
      else setData("제가 추천할 다른 표현이 생각이 안나는군요");
      setHate(100-(Math.floor(response2.data["result"]["Hate"]*100)));
      setOffense(100-(Math.floor(response2.data["result"]["Offensive"]*100)));

      showSpinner(false);
    } catch (e) {
      console.log(e);
    }  
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
            <FirstSlide input={null} onClick={onClick} setInput={setInput} />
          </Carousel.Item>

          <Carousel.Item>
            <SecondSlide spinner={spinner} data={data} restart={restart} score={Math.min(offensive, hate)} similar={data}/>
          </Carousel.Item>
        </Carousel>
        <br />
      </div>
      <br />
    </div>
  );
};

export default App;
