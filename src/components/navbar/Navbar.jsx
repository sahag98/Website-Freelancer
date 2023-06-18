import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    // const menuVariants = {
    //     opened: {
    //         top: 0,
    //         transition: {
    //             when: "beforeChildren",
    //             staggerChildren: 0.5,
    //         },
    //     },
    //     closed: {
    //         top: '-100vh',
    //     },
    // };

    const linkVariants = {
        opened: {
            opacity: 1,
            y: 50,
        },
        closed: {
            opacity: 0,
            y: 0,
        },
    };

    return (
        <nav className='navbar'>
            <div className='header-logo'>
                <h1 className='logo-title'>Website Freelancer</h1>
                <img className='nav-logo' src={logo} />
            </div>
            <ul className='nav-links'>
                {['home', 'about', 'services', 'contact'].map((item) => (
                    <li key={`link-${item}`}>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="navbar-menu">
                <RxHamburgerMenu className='open-logo' onClick={() => setToggle(!toggle)} />

                <div
                    className={'motion-div ' + (toggle && "active")}
                >
                    <HiX className='X-logo' onClick={() => setToggle(false)} />
                    <ul className='mobile-ul' >
                        {['home', 'about', 'services', 'contact'].map((item) => (
                            <motion.li variants={linkVariants} onClick={() => setToggle(false)} className='mobile-li' key={`link-${item}`}>
                                <a className='mobile-a' href={`#${item}`}>{item}</a>
                            </motion.li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar