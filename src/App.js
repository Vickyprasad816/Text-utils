import React from 'react';
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark mode been enabled", "success");
      document.title = 'Textutils-Darkmode'
      // setInterval(() => {
      //   document.title = "install Textutils app now"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "There is a virus in your pc "
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("light mode been enabled", "success");
      // document.title = 'Textutils-Lightmode'
    }

  }
  return (
    <>
    
      {/* <Router> */}
      <div className="container  my-3">
        <Navbar title="Text-utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        
{/* 
          <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}

            {/* <Route  exact path="/"> */}
              
            {/* </Route>
          </Switch> */}
        </div>
      {/* // </Router> */}
    </>
  );
};

export default App;