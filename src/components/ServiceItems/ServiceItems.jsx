import React, { useState } from 'react'
import './serviceitems.css'
import { motion } from 'framer-motion'

const ServiceItems = ({ id, price,bgColor,hoverColor,btnColor,textColor, title, image, description, options  }) => {

    return (
        <div style={{backgroundColor:bgColor}} className='service-item'>
            <div className='desc'>
                <h3>{title}</h3>
                <span>{price}$</span>
                <p>{description}</p>
            </div>
            <ul>
                    {options.map(option=>(
                        <div key={option.id} style={{backgroundColor:option.color}} className='options'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#448d69" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg> {option.title}
                        </div>
                    ))}
                </ul>
                <motion.button
                style={{backgroundColor:btnColor, color:textColor}} className='select-button'
                            whileHover={{
                                scale: 1.02,
                            }}
                            >
                            Select Plan
                        </motion.button>
               
        </div>
    )
}

export default ServiceItems