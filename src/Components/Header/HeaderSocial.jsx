import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai'; // Corrected import path
import { FaInstagram } from 'react-icons/fa';



const HeaderSocial = () => {
  return (
    <div className='header__socials'>
       <a href='https://www.linkedin.com/in/aashish-anand7411/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
       <a href='https://github.com/anandaashish74711' target='_blank' rel="noreferrer"><AiFillGithub/></a>
       <a href='https://instagram.com/aashishanand379?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D' target='_blank'rel="noreferrer"><FaInstagram /></a>

    </div>
  )
}

export default HeaderSocial