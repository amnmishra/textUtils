
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';


import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";





function App() {
  const [mode , setMode] = useState('light');
  const [alert,setAlert] = useState('null');
  const showAlert = (message , type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert('null');
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.background='#eee';
      document.body.style.color='#000';
      showAlert("Light Mode Enable" , "success");
      document.title = 'TextUtils - Light Mode';
      // setInterval(() => {
      //   document.title ='Text Util is Amazing';
      // },1000);
      // setInterval(() => {
      //   document.title ='txtUtils Install';
      // },1500);
    }   
    else{
      setMode('dark');
      document.body.style.background='#2e3032';
      document.body.style.color='#fff';
      showAlert("Dark Mode Enable" , "success");
      document.title = 'TextUtils - Dark Mode';
    }
  }
  return (
    <>
    
<Navbar title="textUtils" abouttitle="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<TextForm showAlert={showAlert} heading="Enter Text" mode={mode} />

    {/* <Router>
      
      <Navbar title="textUtils" abouttitle="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <Routes>
        <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter Text" mode={mode} />} />
         
        <Route exact path='/About' element={<About/>} />
          
      </Routes>

    </Router> */}
      
    </>
  );
}
export default App;