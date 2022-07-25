import React from 'react';
import './About.css'
import { aboutMe } from '../../Portfolio';
import { Fade } from 'react-awesome-reveal';
import ProfileImg from './../../images/pawan2.jpeg'
import { BrowserView, MobileView } from 'react-device-detect';

const About = () => {

    if (aboutMe.display !== true) {
        return null    
    }

    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">{aboutMe.title}{' '}</h2>
                <div className="about-content">
                    <div className="column left">
                        <BrowserView>
                            <Fade direction="left" duration={1000} cascade>
                                <img src={ProfileImg} alt=""/>
                            </Fade>
                        </BrowserView>
                        <MobileView>
                            <Fade direction="bottom" duration={1000} cascade>
                                <img src={ProfileImg} alt=""/>
                            </Fade>
                        </MobileView>
                    </div>
                    <div className="column right">
                        <div className="about-main">
                            <BrowserView>
                                <Fade direction="right" duration={1000} cascade>
                                    <div className="about-text-div">
                                        <p className='subtitle'>{aboutMe.subTitle}</p>
                                        <br />
                                        <div className='aboutme-skills'>
                                            {
                                                aboutMe.skills && aboutMe.skills.map((skills, i) => {
                                                    return (
                                                        <p key={i} className='subTitle skills-text'>{skills}</p>
                                                        );
                                                    }
                                                )
                                            }
                                        </div>
                                    </div>
                                </Fade>
                            </BrowserView>
                            <MobileView>
                                <Fade direction="bottom" duration={1000} cascade>
                                    <div className="about-text-div">
                                        <p className='subtitle'>{aboutMe.subTitle}</p>
                                        <br />
                                        <div className='aboutme-skills'>
                                            {
                                                aboutMe.skills && aboutMe.skills.map((skills, i) => {
                                                    return (
                                                        <p key={i} className='subTitle skills-text'>{skills}</p>
                                                        );
                                                    }
                                                )
                                            }
                                        </div>
                                    </div>
                                </Fade>
                            </MobileView>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;
