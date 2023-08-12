import React from 'react'
import './Rav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import{FaUserGraduate}from 'react-icons/fa'
import{FiBook}from 'react-icons/fi'
import {DiAtom} from 'react-icons/di'
import {BsPersonWorkspace} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'
const Rav = () => {
  const[activeNav,setactiveNav]=useState('#')
  return (
   <nav>
    <a href='#' className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
    {/* <a href='#about' onClick={()=>setactiveNav('#about')} className={activeNav==='#about'?'active':''}><FaUserGraduate/></a> */}
    <a href='#Education' onClick={()=>setactiveNav('#Education')} className={activeNav==='#Education'?'active':''}><FaUserGraduate/></a>

    <a href='#Experience'  onClick={()=>setactiveNav('#Experience')} className={activeNav==='#Experience'?'active':''}><FiBook/></a>
    <a href='#Skills' onClick={()=>setactiveNav('#Skills')} className={activeNav==='#Skills'?'active':''}><DiAtom/></a>
    <a href='#Projects' onClick={()=>setactiveNav('#Projects')} className={activeNav==='#Projects '?'active':''}><BsPersonWorkspace/></a>


   </nav>
  ) 
}

export default Rav