import React from 'react'
import './intro.css'

const Intro = () => {
    return (
        <div data-aos="fade-up" className='intro' id='about'>
            <div className='about'>
                <h2>About Me</h2>
                <p>
                    Currently I’m a website freelancer and I’m looking for opportunities to build websites
                    for businesses just like you and gain the necessary experience
                    to land a software engineering job! Take a look at the services I offer and let me know if you are
                    interested by filling out the contact form!
                </p>
            </div>
            <div className='mission'>
                <h2>Mission</h2>
                <p>Having a unique and an inviting website is beneficial for a new business to be introduced properly
                    to the industry. My mission is to provide the first jump for your
                    business, communicate effectively with you and enable you a new and simple way to
                    connect with your clients through your new website!</p>
            </div>
        </div>
    )
}

export default Intro