import React from 'react'
import { useState } from 'react'

function Textform(props) {
    const [Text, setText] = useState("");
    const [myStyle, setmyStyle] = useState(false);
    const [convert, setConvert] = useState("Convert to fancy font");

    let count =0, i = 0, space = 0;
    if(Text.length !== 0){
      count++;
    }
    while(i<Text.length){
      if(Text.charAt(i) === " " && space === 0){
        space++;
      }else if(Text.charAt(i) !== " " && space > 0){
        count++;
        space--;
      }
      i++;
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase successfully!", "success");
    }

    const handleLoClick = () => {
      let newText = Text.toLowerCase();
      setText(newText);
      props.showAlert("Text converted to Lowercase successfully!", "success");
  }

  const handleFaClick = () => {
    if(myStyle === false){
      setmyStyle(true);
      setConvert("Convert to normal font");
      props.showAlert("Font converted to Fancy font successfully!", "success");

    }else{
      setmyStyle(false);
      setConvert("Convert to fancy font");      
      props.showAlert("Font converted to Normal font successfully!", "success");
    }
}

const handleCopyClick = () => {
  let text = document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied text to clipboard !", "success");
}

  const handleclearClick = () => {
      let newText = "";
      setText(newText);
      props.showAlert("Cleared text successfully!", "success");
  }

  return (
    <>
    <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`} >
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={Text} style={{backgroundColor : props.mode==="light"?"white" : "grey", color : props.mode==="light"?"black" : "white", fontFamily : myStyle === true? "Sacramento" : ""}} onChange={handleChange} id="mybox" rows="8"></textarea>
        </div>
        <div className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</div>
        <div className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</div>
        <div className="btn btn-primary mx-1" onClick={handleFaClick}>{convert}</div>
        <div className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</div>
        <div className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</div>
    </div>
    <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
      <h2>Your text summery</h2>
      <p>{count} words and {Text.length} characters .</p>
      <p>{0.008 * Text.split(" ").length} minutes read.</p>
      <h2>Preview</h2>
      <p style={{fontFamily : myStyle === true? "Sacramento" : ""}}>{Text}</p>
    </div>
    </>
  )
}

export default Textform;