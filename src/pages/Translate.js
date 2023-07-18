import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import { API_URL, languages } from "../utils";

const Translate = () => {
  const [text, setText] = useState({
    description: "",
    language: languages[0],
  });
  const [result, setResult] = useState("");
  const Submit = async () => {
    if (text.description !== "") {
      const res = await axios.post(API_URL + "/translate/", text, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResult(res.data.data);
    }
  };

  return (
    <div className="content">
      <div className="title">Translation with Chat GPT API</div>
      <div className="form">
        <div className="form-group">
          <div className="label">Product Description from PIM Core</div>
          <textarea
            className="form-control"
            placeholder="Product Description from PIM Core"
            onChange={(e) => setText({ ...text, description: e.target.value })}
            rows={5}
          />
        </div>
        <div className="form-group groups">
          <Select
            options={languages}
            value={text.language}
            className="language"
            placeholder="Language"
            onChange={(value) => setText({ ...text, language: value })}
          />
          <div className="btn" onClick={Submit}>
            Translate
          </div>
        </div>
        <div className="form-group">
          <div className="label">Result</div>
          <textarea
            className="form-control"
            placeholder="Translation from ChatGPT"
            rows={5}
            value={result}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Translate;
