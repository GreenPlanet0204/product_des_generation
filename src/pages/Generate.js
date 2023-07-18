import React, { useState } from "react";
import axios from "axios";
import MultipleValueTextInput from "react-multivalue-text-input";
import { API_URL } from "../utils";

const Generate = () => {
  const [text, setText] = useState({
    title: "",
    information: "",
    keywords: [],
    number: 0,
  });

  const [result, setResult] = useState("");

  const Submit = async () => {
    const res = await axios.post(API_URL + "/description/", text, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setResult(res.data.data);
  };

  return (
    <div className="content">
      <div className="title">Generate Product Descriptions</div>
      <div className="form">
        <div className="form-group">
          <div className="label">Title</div>
          <input
            type="text"
            className="form-control"
            value={text.title}
            onChange={(e) => setText({ ...text, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <div className="label">Existing product information</div>
          <textarea
            rows={3}
            className="form-control"
            onChange={(e) => setText({ ...text, information: e.target.value })}
          />
        </div>
        <div className="form-group">
          <div className="label">Additional Keyword</div>
          <MultipleValueTextInput
            className="form-control"
            name="item-input"
            onItemAdded={(item, allItems) =>
              setText({ ...text, keywords: allItems })
            }
            onItemDeleted={(item, allItems) =>
              setText({ ...text, keywords: allItems })
            }
          />
        </div>
        <div className="form-group groups">
          <div className="number">
            <div className="label">Number of words</div>
            <input
              type="number"
              className="form-control"
              min="0"
              value={text.number}
              onChange={(e) => setText({ ...text, number: e.target.value })}
            />
          </div>
          <div className="btn" onClick={Submit}>
            Generate
          </div>
        </div>
        <div className="form-group">
          <div className="label">Result</div>
          <textarea className="form-control" rows={5} value={result} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Generate;
