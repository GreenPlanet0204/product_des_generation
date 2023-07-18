import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { topics, perspectives, effects, API_URL } from "../utils";

const ImageGeneration = () => {
  const [prompt, setPrompt] = useState({
    title: "",
    topic: topics[0],
    effect: effects[0],
    perspective: perspectives[0],
  });
  const [image, setImage] = useState("");

  const Submit = async () => {
    const res = await axios.post(API_URL + "/image/", prompt);
    // console.log("res", res);
    setImage(res.data.data);
  };

  return (
    <div className="content">
      <div className="title">Image Generation</div>
      <div className="image-container">
        <div className="form">
          <div className="form-group">
            <div className="label">Title</div>
            <input
              type="text"
              className="form-control"
              value={prompt.title}
              onChange={(e) => setPrompt({ ...prompt, title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <div className="label">Topic</div>

            <Select
              options={topics}
              placeholder="Select Topics"
              value={prompt.topic}
              onChange={(value) => setPrompt({ ...prompt, topic: value })}
              className="select"
            />
          </div>
          <div className="form-group">
            <div className="label">Effects</div>
            <Select
              options={effects}
              placeholder="Select Effect"
              className="select"
              value={prompt.effect}
              onChange={(value) => setPrompt({ ...prompt, effect: value })}
            />
          </div>

          <div className="form-group">
            <div className="label">Perspective</div>
            <Select
              options={perspectives}
              placeholder="Select Perspective"
              className="select"
              value={prompt.perspective}
              onChange={(value) => setPrompt({ ...prompt, perspective: value })}
            />
          </div>
          <div className="groups">
            <div className="btn" onClick={Submit}>
              Generate
            </div>
          </div>
        </div>
        <div className="image">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default ImageGeneration;
