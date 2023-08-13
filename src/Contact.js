import React from 'react'
import { useNavigate } from 'react-router';

const Contact = () => {
    const nav=useNavigate();
    const goBack=()=>{
        nav(-1);
    }
  return (
    <>
    <button onClick={()=>{goBack()}}>Go Back</button>


    <section  style={{color:"blue"}}>Contact Us page</section>
    </>
  )
}

export default Contact