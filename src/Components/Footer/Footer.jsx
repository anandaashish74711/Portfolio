import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import './Footer.css'
const Footer = () => {
  return (
   <footer>
    <a href='#' className='footer__logo'>AASHISH</a>
    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#About'>About</a></li>
      <li><a href='#Experience'>Experience</a></li>
      <li><a href='#Skills'>Skills</a></li>
      <li><a href='#Projects'>Projects</a></li>
      <li><a href='#Contacts'>contacts</a></li>
    </ul>
    <div className='footer__socials'>
      <a href='https://www.linkedin.com/in/aashish-anand7411/'><AiFillLinkedin/></a>
      <a href='https://www.instagram.com/aashishanand379/'><BsInstagram/></a>
      <a href='https://twitter.com/aashish30865959'><BsTwitter/></a>
    </div>
   </footer>
  )
}

export default Footer