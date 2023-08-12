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
          <img src={ME} alt="About Image"/>
        </div>
      </div>

      <div className='about__content'>
       <div className='about__cards'>
        <article className='about__card'>
          <BsPersonWorkspace className='about__icons'/>
          <h5>Projects</h5>
          <small>I have 3+ projects on various TechStacks</small>
        </article>


        <article className='about__card'>
          <GiAchievement className='about__icons'/>
          <h5>Achievments</h5>
          <small>Solved 300</small>
        </article>
      

        <article className='about__card'>
          <DiAtom className='about__icons'/>
          <h5>Skills</h5>
          <small>I am a full stack devloper</small>
        </article>
       </div>
        <p>
         Lorem ipsum dolor sit amet, consectetur 
         adipisicing elit. Tempora praesentium laudantium
          quisquam, dolor sunt veritatis debitis iusto dolore 
          ipsam temporibus itaque sit voluptatibus omnis 
         deserunt facilis atque repellat repellendus at!
         </p>
         <a href='#Contacts' className='btn btn-primary'>Let's Talk</a>
       </div>
      </div>
    </section>
  )
  
}
export default About