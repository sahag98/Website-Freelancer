import React from 'react'
import { data } from './data'
import './services.css'
import ServiceItems from '../ServiceItems/ServiceItems'

const Services = ({plan,setPlan}) => {

    return (
        <div className='services-container' id='services'>
            <div className='service-header'>
                <div className='service-title'>
                    <h1>Services&Pricing</h1>
                </div>
                <p>For more information on the services, kindly call our phone number, or send us a message using the contact form!</p>
            </div>
            <div className='items'>
                {data.map((service) => (
                    <ServiceItems
                        plan={plan}
                        setPlan={setPlan}
                        key={service.id}
                        id={service.id}
                        title={service.title}
                        bgColor={service.color}
                        btnColor={service.buttonColor}
                        textColor={service.textColor}
                        hoverColor={service.hoverColor}
                        price={service.pricing}
                        description={service.description}
                        options={service.options}
                    />
                ))}
            </div>
        </div>
    )
}

export default Services