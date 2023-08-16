import React from 'react'
import './header.css'
import responsive from '../../assets/web.svg'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div className='header' id='home'>
            <div className='header-wrapper'>
                <div className='header-left'>
                    <h1 className='header-title'>Building Personalized Websites For You</h1>
                    <a href="#contact">
                        <motion.button
                            whileHover={{
                                scale: 1.02,
                                
                            }}
                           
                            className='header-button'>
                            Get Started
                        </motion.button>
                    </a>
                    <a href="#work">
                        <motion.button
                        
                            whileHover={{
                                scale: 1.02,
                            }}
                            className='header-button2'>
                            How does it work?
                        </motion.button>
                    </a>
                </div>
                <div className='header-right'>
                    <img className='header-img' src={responsive} />
                </div>
            </div>
        </div >
    )
}

export default Header

