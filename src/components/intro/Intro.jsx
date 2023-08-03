import React from 'react'
import './intro.css'
import {MdPayment} from 'react-icons/md'
import {AiOutlineCheckSquare} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'

const Intro = () => {
    return (
        <div data-aos="fade-up" className='intro' id='about'>
            <h2>Why Choose Me?</h2>
            <div className='intro-cards'>
            <div className='about'>
            <MdPayment size={50} color='#103845' />
                <h2>Payment Arrangement</h2>
                
                <p>
                Pay 50% of the total cost upfront. Once the job has been successfully completed to your satisfaction, the remaining balance can be settled promptly.
                </p>
            </div>
            <div className='about'>
            <AiOutlineCheckSquare size={50} color='#103845' />
                <h2>Simple</h2>
                <p>
                Our objective is to create a simple and seamless experience for our clients, facilitating effortless navigation and effective communication.
                </p>
            </div>
            <div className='about'>
            <CgWebsite size={40} color='#103845' />
                <h2>Expertise</h2>
                <p>
                My skillset encompasses web design, development, and optimization, ensuring that your website will not only look visually appealing but also perform optimally.
                </p>
            </div>
            </div>
        </div>
    )
}

export default Intro