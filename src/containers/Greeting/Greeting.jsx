import React, { useRef, useEffect } from 'react';
import './Greeting.css'
import { greeting } from '../../Portfolio'
import SocialMediaLinks from './../../components/SocialMediaLinks/SocialMediaLinks';
import Typed from 'typed.js';

function Typing() {

    const typeTarget = useRef(null);

    useEffect(() => {
        
        const typed = new Typed(typeTarget.current, {
            strings: ["Web Developer", "Coder", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    
        return () => {
          typed.destroy();
        };

    }, []);

    return (
        <span className="typing" ref={typeTarget} />
    )
}


const Greeting = () => {

    if (greeting.display !== true) {
        return null
    }

    return (
        <section className="home" id="home">
            <div className="max-width">
                <div className="home-content">
                    <div className="text-1">{greeting.title}</div>
                    <div className="text-2">{greeting.username}</div>
                    <div className="text-3">I'm a <Typing/> </div>
                    <div className="socialMedia">
                        <SocialMediaLinks/>
                    </div>
                    <div className="resume">
                        <a href={process.env.PUBLIC_URL + '/Pawankumar_Jaiswal.pdf'} target="_blank">See My Resume</a>
                        <a href={process.env.PUBLIC_URL + '/Pawankumar_Jaiswal.pdf'} download rel='noopener noreferrer'>Download Resume</a>
                    </div>  
                </div>
            </div>
        </section>
    )
};

export default Greeting;
