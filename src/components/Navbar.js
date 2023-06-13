import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from "../context/Firebase";
export default function Navbar(props,{user}) {
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <ul className=" navbar-nav me-auto" >
            {
              user?
              <li className="nav-item">
                <button className="navbar-nav mr-auto" onClick={()=>{
                  auth.signOut();
                  /* navigate('/login')*/
                }}  type="submit">Logout</button>
              </li>
              :
              <>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link active" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/login">LogIn</Link>
            </li>
            </>
}
              </ul>
              </div>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input"onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change mode</label>
  
</div>
        
      </div>
    </nav>
  );
}
