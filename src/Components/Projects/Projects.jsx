import React from 'react'
import './Projects.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Projects = () => {
  return (
    <section id='Projects'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
       <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG1} alt=""/>
          </div>
        <h3>Chat App</h3>
          <h4>Full Stack Chat APP devloped a feature-rich communication application using React 18,MUI CSS ,Redux ,NodeJs , ExpressJS ,MongoDB ,Socket.io and ZEGOCLOUD WebRTC API.

 </h4>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/anandaashish74711?tab=overview&from=2023-07-01&to=2023-07-31' className='btn'>Github</a>
          <a href='https://github.com/anandaashish74711?tab=repositories' className='btn btn-primary' tatrget='_blank'>Live Demo</a>
          </div>
        </article>
      
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG2} alt=""/>
          </div>    
          <h3>Gourment Hut</h3>
          <h4>Developed full-stack food delivery website with Reactjs,Redux and Tailwind CSS for an impressive user experience and interactive UI components  </h4>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/anandaashish74711/Portfolio' className='btn'>Github</a>
          <a href='https://github.com/anandaashish74711?tab=repositories' className='btn btn-primary' tatrget='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG3} alt=""/>
          </div>    
          <h3>Movix </h3>
          <h4>	Developed the frontend of “Movix” application using React18 , Redux Toolkit,Axios to fetch data from REST APIs ensuring real-time updates and rendering of movie formation of the application.
</h4>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/anandaashish74711/Movix' className='btn'>Github</a>
          <a href='https://github.com/anandaashish74711/Movix' className='btn btn-primary' tatrget='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG4} alt=""/>
          </div>    
          <h3>Portfolio Website </h3>
          <h4>Created a dynamic personal portfolio website using React 18, incorporating modern CSS and JavaScript techniques to showcase skills, projects,experience,achievements and contacts </h4>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/anandaashish74711/Portfolio' className='btn'>Github</a>
          <a href='https://aashish-5597f.web.app/' className='btn btn-primary' tatrget='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG5} alt=""/>
          </div>    
          <h3>To Do-List </h3>
          <h4>Designed and developed an interactive to-do list web application using HTML, CSS, and JavaScript. Implemented dynamic user interfaces, allowing users to add, edit, and remove tasks in real-time</h4>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/anandaashish74711/T0-DO-list' className='btn'>Github</a>
          <a href='https://github.com/anandaashish74711/T0-DO-list' className='btn btn-primary' tatrget='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG6} alt=""/>
          </div>    
          <h3>Quiz app</h3>
          <h4>Built a dynamic quiz app using Next.js 13's App Router, Tailwind CSS, and Shadcn for UI. Integrated OpenAI's API, optimized data-fetching, and adeptly managed databases with ORMs within a collaborative team setting.</h4>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/anandaashish74711/Portfolio' className='btn'>Github</a>
          <a href='https://github.com/anandaashish74711?tab=repositories' className='btn btn-primary' tatrget='_blank'>Live Demo</a>
          </div>
        </article>


        

       </div>

    </section>
  )
}

export default Projects