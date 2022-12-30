import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import './footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-icons'>
                <span>connect with us on instagram:</span>
                <a className='footer-link' target="_blank" href="https://www.instagram.com/freelance.website/">
                    <BsInstagram className='instagram-icon' />
                </a>

            </div>
            <span className='footer-copyright'> © 2022 Copyright: freelance.website</span>
        </div>
    )
}

export default Footer