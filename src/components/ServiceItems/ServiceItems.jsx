import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { CSSTransition } from 'react-transition-group';
import './serviceitems.css'

const ServiceItems = ({ id, title, image, text, longText, examples }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className='service-item'>

            <img className='service-img' src={image} />



            <div className='desc'>
                <h3>{title}</h3>
                <CSSTransition in={isExpanded} timeout={500} classNames="fade">
                    <p>{isExpanded ?
                        <div>
                            <p className='long-text'>
                                {longText}
                            </p>
                            Examples:
                            {examples?.map((example) => (
                                <ul key={example.id}>
                                    <a className='example-link' href={example.link} target="_blank">
                                        <li>
                                            {example.uiTitle}
                                        </li>
                                    </a>
                                </ul>
                            ))}

                        </div>
                        : text
                    }
                    </p>
                </CSSTransition>
                <div onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ?
                        <div className='service-icon'>
                            <AiOutlineUp />
                        </div>
                        : <div className='service-icon'>
                            <AiOutlineDown />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ServiceItems