import React from 'react'
import './Skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'


const Skills = () => {
  return (
  < section id='Skills'>
   
    <h2>MY Skills</h2>


    <div className='container Skills__container'>

<div className='Skills__Problem'>
  <h3>Problem Solving</h3>

  <div className='Skills__content'>
    <article className='Skills__details'>
     <BsFillPatchCheckFill className='Skills__details-icons'/> 
    <div> <h4>C++</h4></div>
     <small className='text-light'></small>
    </article>

    <article className='Skills__details'>
    <BsFillPatchCheckFill className='Skills__details-icons'/> 
    <div> <h4>Data Structure</h4></div>
     <small className='text-light'></small>
    </article>

    <article className='Skills__details'>
    <BsFillPatchCheckFill className='Skills__details-icons'/> 
   <div>  <h4>Algorithms</h4></div>
     <small className='text-light'></small>
    </article>
    

    <article className='Skills__details'>
   
   
     <small className='text-light'></small>
    </article>

    <article className='Skills__details'>
  
     <small className='text-light'></small>
    </article>

    

  </div>

</div>
<div className='Skills__Fundamental'>

  <h3>Fundamental</h3>
  <div className='Skills__content'>
    <article className='Skills__details'>
    <BsFillPatchCheckFill className='Skills__details-icons'/> 
     <div><h4>OOPs</h4></div>
     <small className='text-light'></small>
    </article>

    <article className='Skills__details'>
    <BsFillPatchCheckFill className='Skills__details-icons'/> 
    <div> <h4>DBMS</h4></div>
     <small className='text-light'></small>
    </article>

    <article className='Skills__details'>
    <BsFillPatchCheckFill className='Skills__details-icons'/> 
    <div> <h4>Operating System</h4></div>
    <small className='text-light'></small>
    
    </article>

    <article className='Skills__details'>
    <BsFillPatchCheckFill className='Skills__details-icons'/> 
    <div> <h4>Computer System</h4></div>
     <small className='text-light'></small>
    </article>

   

    

  </div>

</div>

<div className='Skills__Problem'>
  <h3>Data Base</h3>

  <div className='Skills__content'>
    <article className='Skills__details'>
     <BsFillPatchCheckFill className='Skills__details-icons'/> 
    <div> <h4>Mongo DB</h4></div>
     <small className='text-light'></small>
    </article>

    <article className='Skills__details'>
    <BsFillPatchCheckFill className='Skills__details-icons'/> 
    <div> <h4>My Sql</h4></div>
     <small className='text-light'></small>
    </article>

   
    

    <article className='Skills__details'>
   

     <small className='text-light'></small>
    </article>

    <article className='Skills__details'>
 
     <small className='text-light'></small>
    </article>

    

  </div>


</div>



    

      <div className='Skills__Friontend'>
        <h3>Frontend Devlopment</h3>

        <div className='Skills__content'>
          <article className='Skills__details'>
          <BsFillPatchCheckFill className='Skills__details-icons'/> 
          <div> <h4>HTML</h4></div>
           <small className='text-light'></small>
          </article>

        

          <article className='Skills__details'>
          <BsFillPatchCheckFill className='Skills__details-icons'/> 
          <div> <h4>JavaScript</h4></div>
           <small className='text-light'></small>
          </article>

         
          <article className='Skills__details'>
          <BsFillPatchCheckFill className='Skills__details-icons'/> 
          <div> <h4> Tailwind CSS </h4></div>
           <small className='text-light'></small>
          </article>

          <article className='Skills__details'>
          <BsFillPatchCheckFill className='Skills__details-icons'/> 
          <div> <h4>React</h4></div>
           <small className='text-light'></small>
          </article>

        </div>

      </div>
      <div className='Skills__Backend'>

        <h3>Backend Devlopment</h3>
        <div className='Skills__content'>
          <article className='Skills__details'>
          <BsFillPatchCheckFill className='Skills__details-icons'/> 
          <div> <h4>Node js</h4></div>
           <small className='text-light'></small>
          </article>

          <article className='Skills__details'>
          <BsFillPatchCheckFill className='Skills__details-icons'/> 
         <div>  <h4>Express js</h4></div>
           <small className='text-light'></small>
          </article>

      

          <article className='Skills__details'>
          <BsFillPatchCheckFill className='Skills__details-icons'/> 
          <div> <h4>Socket.io</h4></div>
           <small className='text-light'></small>
          </article>
          

        </div>

      </div>
      <div className='Skills__Backend'>

<h3>Misslenous</h3>
<div className='Skills__content'>
  <article className='Skills__details'>
  <BsFillPatchCheckFill className='Skills__details-icons'/> 
  <div> <h4>Verson Control : Git</h4></div>
   <small className='text-light'></small>
  </article>

  <article className='Skills__details'>
  <BsFillPatchCheckFill className='Skills__details-icons'/> 
 <div>  <h4>Compiler : VS Code</h4></div>
   <small className='text-light'></small>
  </article>
  <article className='Skills__details'>
  <BsFillPatchCheckFill className='Skills__details-icons'/> 
 <div>  <h4>API : REST</h4></div>
   <small className='text-light'></small>
  </article>




  </div>

</div>


   </div>

 
  </section>

  )
}

export default Skills