import React from 'react'
import './Achievment.css'

import{SiGeeksforgeeks}from 'react-icons/si'
import{SiLeetcode}from 'react-icons/si'
import{SiCodingninjas}from 'react-icons/si'
const Achievment = () => {
  return (
    <section id="Achievment">
     
 <article className='Achievment__card'>


<div className='achtext'>
<spexial id='spwork'>Achievment</spexial>
<h3> <SiLeetcode className='Achievment__details-icons'/> Leetcode</h3>


<h3> <SiGeeksforgeeks className='Achievment__details-icons'/> GeeksforGeeks </h3>
<h4>this is the right way to allign things how acab</h4>




<h3> <SiCodingninjas className='Achievment__details-icons'/> Leetcode</h3>




<div>

</div>
</div>


</article>
    </section>
  )
}

export default Achievment