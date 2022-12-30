import React from 'react'
import { data } from './data'
import './services.css'
import ServiceItems from '../ServiceItems/ServiceItems'

const Services = () => {

    return (
        <div className='services-container' id='services'>
            <div className='service-header'>
                <div className='service-title'>
                    <h1>Services</h1>
                </div>
                <p>For more information on the services, kindly call our phone number, or send us a message using the contact form!</p>
            </div>
            <div className='items'>
                {data.map((service) => (
                    <ServiceItems
                        key={service.id}
                        id={service.id}
                        title={service.title}
                        image={service.image}
                        text={service.shortdescription}
                        longText={service.longdescription}
                        examples={service.examples}
                    />
                ))}
            </div>
        </div>
    )
}

export default Services