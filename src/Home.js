import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
const Home = () => {
    const nav=useNavigate();
    const goTofunction=()=>{
        nav("/about");
    }
  return (
    
    <>
    <Header/>
    <button onClick={()=>{goTofunction()}}>Go to About</button>
    <section  style={{color:"blue"}}>Home page</section>
    
    </>
  )
}

export default Home