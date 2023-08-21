import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {GiAchievement} from 'react-icons/gi'
import {BsPersonWorkspace} from 'react-icons/bs'
import {DiAtom} from 'react-icons/di'
const About = () => {
  return (
    <section id="about">
    <h5 id='makewell'>Know me </h5>
    <h2 >About Me</h2>
    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} />
        </div>
      </div>

      <div className='about__content'>
       <div className='about__cards'>
        <article className='about__card'>
          <BsPersonWorkspace className='about__icons'/>
          <h5>Projects</h5>
          <small>I have 6+ projects on various Tech Stacks</small>
        </article>


        <article className='about__card'>
          <GiAchievement className='about__icons'/>
          <h5>Achievments</h5>
          <small>Solved 500+ dsa problems on various platform</small>
        </article>
      

        <article className='about__card'>
          <DiAtom className='about__icons'/>
          <h5>Skills</h5>
          <small>Pasionate devloper with good communication skills</small>
        </article>
       </div>
        <p>
        Hi, I'm Aashish Anand, a passionate developer with expertise spanning the full stack. Blending creative front-end prowess with robust back-end architecture, I craft seamless, user-centric applications. My strong communication and collaborative skills enhance teamwork and project success.
         </p>
         <a href='#Contacts' className='btn btn-primary'>Let's Talk</a>
       </div>
      </div>
    </section>
  )
  
}
export default About