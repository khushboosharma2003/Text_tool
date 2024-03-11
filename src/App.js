import { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import React from "react";
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const chngMode = () => {
    if (mode === 'light') {

      setMode('dark');
      document.body.style.backgroundColor = '#0e141ee8';
      showalert("Dark mode has enabled ", 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light mode has enabled ", 'success');

    }
  }
  const [alert, setalrt] = useState(null);

  const showalert = (message, type) => {
    setalrt(
      {
        type: type,
        msg: message
      }
    )
    setTimeout(() => {
      setalrt(null);
    }, 2000)
  }
  return (
    <Router>
      <>

        {/* // <Switch> */}
        <Navbar title="COUNTER" mode={mode} chngMode={chngMode} />
        <Alert alert={alert} />
        <Routes>
        
          <Route exact path="/" element={<Form text="ENTER THE TEXT TO ANALYSE" showalert={showalert} mode={mode} />}>

          </Route>
          {/* </Switch> */}
        </Routes>


        {/* <Navbar title="COUNTER" mode={mode} chngMode={chngMode} />
      <Alert alert={alert} />
      <Form text="ENTER THE TEXT TO ANALYSE" showalert={showalert} mode={mode} />
      <About/> */}
      </>
    </Router>

  );
}

export default App;
