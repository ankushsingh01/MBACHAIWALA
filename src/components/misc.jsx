import React from 'react'
import logo from "../assets/logo.png"
import {BsMouse} from "react-icons/bs"

const Misc = () => {
  return (
    <>
      <div className='cursor'></div>
      <a href="/" className="logo">
      <img src={logo} alt="logo" />
      </a>
      <a href="/franchise" className="franchisebtn">GET A FRANCHISE</a>
      <BsMouse className="scrollbtn" />
    </>
  )
}

export default Misc