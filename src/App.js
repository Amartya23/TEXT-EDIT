import './App.css';
import Navbar from './components/Navbar.js';
import About from './components/About';
import Home from './components/Home.js';
import React ,{ useState,useEffect} from 'react';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Loginpage from './components/Loginpage';
import {auth} from "./components/Signup";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
 function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>
  {
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
setAlert(null);
  },1500);
  }
   const toggleMode = () =>{
if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor='#042743';
  showAlert("Dark mode has enabled", "success");
}
else{
  setMode('light');
   document.body.style.backgroundColor='white';
   showAlert("Light mode has enabled", "success");
}
  }
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }
   const [user,setUser] = useState('');
   const [isProcessing, setIsProcessing] = useState(false);
    useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null)
    })
  },[]);
  return(
 <>
  <BrowserRouter>
  <div className={`App ${isProcessing ? 'disabl-click' : ''}`}>
    <Navbar user={user} title="Text-Edit" mode={mode} toggleMode={toggleMode}/>

  <Alert alert ={alert}/>

  <div className="container my-3">
    <Routes>
   {/* {
   currentForm === "loginpage" ? <Loginpage onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
 } */}
  <Route exact path="/Home" element={<Home showAlert={showAlert} heading="Enter Your text to Analyze below " mode={mode} user={user} />} />
  <Route exact path="/About" element={<About mode={mode} user={user} />} />
          <Route exact path="/login" element={<Loginpage setIsProcessing={setIsProcessing}/>} />
          <Route exact path="/signup" element={<Signup
          setIsProcessing={setIsProcessing}/>} />
</Routes>
  </div>
  </div>
  </BrowserRouter>
</>
  );
}
export default App;

