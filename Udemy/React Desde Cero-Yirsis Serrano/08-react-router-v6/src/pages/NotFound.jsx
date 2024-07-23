import React from 'react'
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const introPath = `/assets/`;
    const navigate = useNavigate();
    const handleRedirect = () =>{
      navigate("/");
    };
  return (
    <div className='container'>
        <div className='row mx-auto text-center'>
    <img src={`${introPath}404.gif`}/>
    <br></br>
    <button className='btn btn-info mt-3' onClick={handleRedirect}>BACK TO HOME</button>
    </div>
  </div>
  )
}

export default NotFound