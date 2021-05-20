import React from 'react';
import { Hero } from '../components/Hero';
import { Contact } from './Contact';
import { Presentation } from './Presentation';
import { Services } from './Services';


export const IndexContainer = () => {
    return (
        <>
            <Hero />
            <Presentation />
            <Services />
            <Contact />
        </>
    )
}
