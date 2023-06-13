import React, { useState } from 'react'
import {auth} from "../context/Firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import {sendPasswordResetEmail} from "firebase/auth";
import './forgot.css';
import { useNavigate } from "react-router-dom";
export default function Loginpage({ setIsProcessing }) {
const [email, setEmail] = useState(""); 
const [password, setPassword] = useState(""); 
const [isSubmitting, setIsSubmitting] = useState(false);
const [isForgetSubmitting, setIsForgetSubmitting] = useState(false);
const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsProcessing(true);
      setIsForgetSubmitting(true);
      await sendPasswordResetEmail(auth,forgotPasswordEmail);
      alert(`A reset link has been sent to your registered email !`);
      setForgotPasswordOpen(false);
      setForgotPasswordEmail("");
    } catch (err) {
      alert(err);
    } finally {
      setIsProcessing(false);
      setIsForgetSubmitting(false);
    }
  };
 const navigate = useNavigate();
const SubmitForm =async (e) => {

  e.preventDefault(); 
 try{
  await signInWithEmailAndPassword(auth, email, password);
  alert("You are Loged in sucessfully !");
   navigate('/Home');
  // <Navigate to="/TextForm"/>
  }catch(err){
   alert(err.message);
  }
 finally {
      setIsProcessing(false);
      setIsSubmitting(false);
 }
setEmail ('');
setPassword('');
}
// const forgotPassword=(email)=>{
// return sendPasswordResetEmail(auth,email);
// };
// const forgotPasswordHandler = () => {
//   const email= emailRef.current.value;
//   if (email) forgotPassword(email).then(()=>(emailRef.current.value=""))
// };
  return (
    <>
    <div className="containerone">
      <h1 className ="heading">LOG IN</h1>
    <form action ="" onSubmit={SubmitForm}  >
      <div className ="First">
        <lable htmlFor = "email">Email</lable>
        <input type ="email" name="email" id ="email" placeholder="Email"  autoComplete="off"  value={email} 
         onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div className="First">
        <lable htmlFor = "password">Password</lable>
        <input type ="password" name="password" id ="password"  placeholder="********" autoComplete="off" value={password} 
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button  className ="y-btn" type ="submit" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Log In"}</button>
       <button className="link-btn"  onClick={() => setForgotPasswordOpen(true)} >
          Forgot password?
        </button>
       </form>
       <button className ="link-btn" type ="submit" onClick={() => navigate("/Signup")}> Don't have an account? Sign Up here. </button>
        {forgotPasswordOpen && (
          <div className="modal-container">
            <div className="modal">
              <button className="close-btn" onClick={() => setForgotPasswordOpen(false)}>
                x
              </button>
              <form className="forgot-password-form" onSubmit={handleForgotPasswordSubmit}>
                <label htmlFor="forgot-password-email"></label>
                <input
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your registered email address"
                  id="forgot-password-email"
                  name="forgot-password-email"
                  required
                />
                <button type="submit" disabled={isForgetSubmitting}>
                  {isForgetSubmitting ? "Sending..." : "Send reset email"} 
                </button>
              </form>
            </div>
          </div>
        )}
        </div>
        </>
       );
}
