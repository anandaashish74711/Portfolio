import React from 'react'
import './Achievment.css'

import{SiGeeksforgeeks}from 'react-icons/si'
import{SiLeetcode}from 'react-icons/si'
import{SiCodingninjas}from 'react-icons/si'
const Achievment = () => {
  return (
    <section id="Achievment">
      
 <article className='Achievment__card'>

        

<div className='one__portion'  >
<h2> Achievment</h2>
<div className='edutext'>
<div>
<h3> <SiLeetcode className='Education__details-icons'/> Leetcode</h3>
<small className='text-light'>(2020-2024)   CGPA:8.69</small>
</div>

<div>
<h3> <SiGeeksforgeeks className='Education__details-icons'/> GeeksforGeeks </h3>
<h4>this is the right way to allign things in senter dbhkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</h4>
</div>


<div>
<h3> <SiCodingninjas className='Education__details-icons'/> Leetcode</h3>
<small className='text-light'>(2020-2024)   CGPA:8.69</small>
</div>


<div>

</div>
</div>
</div>

</article>
    </section>
  )
}

export default Achievment