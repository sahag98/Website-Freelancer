import React from 'react'
import "./work.css"
const Work = () => {
  return (
    <div className='container'>
    <div className='work' id='work'>
      <section className='title'>
      <h2>How does it work?</h2>
      <p>Take a look at all the steps needed to succesfully build your website.</p>
      </section>
      
      <div className='steps'>
        <ul>
          <div className='steps-horizontal'>
            <li><span className='listNums'>1.</span> Select the optimal plan for your website to ensure a professionally curated online presence.</li>
            <li><span className='listNums'>2.</span> Choose on a color pallete that befits your brand's essence and resonates with your target audience. </li>
          </div>
          <div className='steps-horizontal'>
          <li><span className='listNums'>3.</span> Provide any kind of design or functionality inspiration for the website to ensure faster project delivery. </li>
          <li><span className='listNums'>4. </span>
             Decide on an estimated time and effectively communicate on progress until the website is fully built and ready.
           </li>
          </div>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Work