import React, { useState } from 'react'
import {auth} from "../context/Firebase";
// import { auth } from "../firebase";
// import {auth} from "./components/Signup";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Signup( {setIsProcessing}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
const [name, setName] = useState("");
const [email, setEmail] = useState(""); 
const [password, setPassword] = useState(""); 

const SubmitForm = async(e) => {
  e.preventDefault(); 

  try{
     setIsProcessing(true);
      setIsSubmitting(true);
  await createUserWithEmailAndPassword(auth,email,password);
   alert("You are Sucessfully Sign Up !");
     navigate("/Home");
  }catch(err){
     alert(err.message);
  }
   finally {
      setIsSubmitting(false);
      setIsProcessing(false);
    }
  setName ('');
  setEmail ('');
  setPassword ('');
}
 const navigate = useNavigate();
  return (
    <>
     
    <div className="containerone">
      <h1 className ="heading">SIGN UP</h1>
    <form action ="" onSubmit={SubmitForm} method ="POST">
      <div className="First">
         <lable htmlFor = "name">Full name</lable>
         
            <input type ="name" value={name} name="name"  id="name" placeholder="Full Name" autoComplete="off" onChange={(e) => setName(e.target.value)}  required />
      </div>
      <div className ="First">
        <lable htmlFor = "email">Email</lable>
        <input type ="email" name="email" id ="email" placeholder="Email"   autoComplete="off" value={email} 
         onChange={(e) => setEmail(e.target.value)} 
        />
        </div>
      <div className="First">
        <lable htmlFor = "password">Password</lable>
        <input type ="password" name="password" id ="password"  placeholder="********" autoComplete="off" value={password} pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number." onChange={(e) => setPassword(e.target.value)} />
      </div>
     <button  className =" y-btn" type ="submit" disabled={isSubmitting}>{isSubmitting ? "Please wait..." :"SignUp"}</button>
     
      
       </form>
        <button  className ="link-btn" type ="submit" onClick={() => navigate("/login")}>Already have an account? Login here. </button>
        </div>
        </>
       );
}
export {auth};
