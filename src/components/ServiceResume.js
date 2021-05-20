import React from 'react';

import { serviceResumeBox, title, text } from '../styles/components/Services.module.css'

export const ServiceResume = ({ service, description }) => {
    return (
        <div className={serviceResumeBox}>
            <h2 className={title}>{service}</h2>
            <p className={text}>{description}</p>
        </div>
    )
}
