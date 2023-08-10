import React from 'react'
import './Education.css'
import{FaUserGraduate} from 'react-icons/fa'

import{FaSchool}from 'react-icons/fa'

const Education = () => {
  return (
   <section id='Education'>
   <div className='container Education__container'>
  
       <div className='Education__cards'>
       
        <article className='Education__card'>

        
        <div className='one__portion'  >
        
          <FaSchool className='icons'/>
        </div>
          <div className='one__portion'  >
          <h3>Education</h3>
          <div className='edutext'>
        <div>
        <h4> <FaUserGraduate className='Education__details-icons'/> Bharati Vidypeeth University College of Engineering,Pune</h4>
        <small className='text-light'>CGPA:8.69(till sem VI)</small>
       
        </div>
  
        <div>
        <h4><FaUserGraduate className='Education__details-icons'/>Jawahar Navodaya Vidalaya,Rajgir</h4>
        <small className='text-light'>(2017-2019)    Percentage:81.2%</small>
        </div>

          <div>
        <h4> <FaUserGraduate className='Education__details-icons'/> Manas Bhumi Senior Sec School ,Rajgir</h4>
        <small className='text-light'>(2012-2017) CGPA:9.4</small>
        </div>
        </div>
        </div>

        </article>

 

    </div>


  </div>
    </section>
  )

  
}

export default Education