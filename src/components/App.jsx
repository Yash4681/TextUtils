import React, {useState} from 'react';
// import About from './About';
import Navbar from './Navbar';
import Textform from './Textform';
import Alert from "./Alert";
// import {BrowserRouter, Routes, Route,} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    },);
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor = "grey";
        showAlert("Dark Mode Enabled Successfully", "success");
        document.title = "TextUtils - DarkMode"
    }else if(mode === "dark"){
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light Mode Enabled Successfully", "success");
        document.title = "TextUtils - LightMode"
    }
  }

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title = "TextUtils" toggleMode={toggleMode} mode = {mode}/>
        <Alert alert={alert} />
        <Textform mode={mode} showAlert={showAlert} heading={"Enter the text to analyze below"} />
        <div className="container my-3">
            {/* <Routes>
                <Route exact path='/' element={}/>
                <Route exact path='/about' element={<About mode={mode}/>}/>
            </Routes>  */}
        </div>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App