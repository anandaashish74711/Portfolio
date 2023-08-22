import React from 'react'
import './Achievment.css'

import{SiGeeksforgeeks}from 'react-icons/si'
import{SiLeetcode}from 'react-icons/si'
import{AiFillGithub}from 'react-icons/ai'
const Achievment = () => {
  return (
    <section id="Achievment">
     
 <article className='Achievment__card'>


<div className='achtext'>
<h3 section id='white'>Achievment</h3>
<h3> 
 
    <SiLeetcode className="Achievement__details-icons" />
    <a href="https://leetcode.com/aashishanand379/">
  LeetCode
  </a>
</h3>

<h3> 

    <SiGeeksforgeeks className="Achievement__details-icons" />
    <a href="https://auth.geeksforgeeks.org/user/anandaashish/">
  GeeksforGeeks
  </a>
</h3>

<h3> 
  
    <AiFillGithub className="Achievement__details-icons" />
    <a href="https://github.com/anandaashish74711">
  Github
  </a>
</h3>




<div>

</div>
</div>


</article>
    </section>
  )
}

export default Achievment