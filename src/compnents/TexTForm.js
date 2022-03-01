import React, { useState } from "react";

function TextForm(props) {
  const upClick = () => {
    // console.log("upclicked")
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowClick = () => {
    // console.log("lowclicked")
    let newText = text.toLowerCase();
    setText(newText);
  };

  const removeSpcClick = () => {
    // console.log("removeSpcClicked")
    // let newText = document.getElementById("mybox")
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const clearTxtClick = () => {
    // console.log("removeSpcClicked")
    let newText = "";
    setText(newText);
  };

  const copyTxtClick = () => {
    console.log("copyClicked");
    let newText = document.getElementById("mybox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  const clickOnChange = (event) => {
    // console.log("onchange")
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  console.log(text);

  return (
    <>
      <div>
        <h2>{props.Heading} </h2>
        <div className="form-group">
          <textarea
            className="form-control mb-3 container"
            value={text}
            onChange={clickOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <div className="container">
        <button className="btn btn-primary m-1" onClick={upClick}>
          Convert To UpperCase
        </button>

        <button className="btn btn-secondary m-1" onClick={lowClick}>
          Convert To LowerCase
        </button>

        <button className="btn btn-warning m-1" onClick={removeSpcClick}>
          Remove Extra Spaces
        </button>

        <button className="btn btn-danger m-1" onClick={clearTxtClick}>
          Clear Text
        </button>
      </div>
      </div>
      <div className="container my-3">
        <h3> Your Text Summary </h3>

        <p>
          <strong>Words:</strong> {text.split(" ").length}
        </p>

        <p>
          <strong>Characters:</strong> {text.length}
        </p>

        <p>
          <strong>Estimated Time To Read</strong> {text.split(" ").length} Words
          is: <strong> {0.008 * text.split(" ").length} </strong> Minutes
        </p>

        <h3>Preview:</h3>

        <p>{text} </p>

        <button className="btn btn-info m-1" onClick={copyTxtClick}>
          Copy Text
        </button>
      </div>
    </>
  );
}

export default TextForm;