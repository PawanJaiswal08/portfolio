import React from 'react';
import  './Skills.css'
import { techStack, skillsSection } from "../../Portfolio";
import SoftwareSkill from '../../components/SoftwareSkills/SoftwareSkill';
import { Fade } from 'react-awesome-reveal';
import { BrowserView, MobileView } from 'react-device-detect';

const Skills = () => {

    if (skillsSection.display !== true) {
        return null    
    }

    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">{skillsSection.title}</h2>
                <div className="skills-content">
                    <div className="column left">
                        <BrowserView>
                            <Fade direction="left" duration={1000} distance="20px">
                                    <h1 className="ptitle">Proficiency</h1>
                                    <p className='subTitle'>{skillsSection.subTitle}</p>
                                    {
                                        techStack.experience.map((exp,i) => {
                                            
                                            const progressStyle = {
                                                width: exp.progressPercentage
                                            };
                                            
                                            return (
                                                <div key={i} className="skill">
                                                    <p style={{padding:' 1rem 0rem'}}>{exp.Stack}</p>
                                                    <div className="meter">
                                                        <span style={progressStyle}></span>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                            </Fade>
                        </BrowserView>
                        <MobileView>
                            <Fade direction="bottom" duration={1000} distance="20px">
                                    <h1 className="ptitle">Proficiency</h1>
                                    <p className='subTitle'>{skillsSection.subTitle}</p>
                                    {
                                        techStack.experience.map((exp,i) => {
                                            
                                            const progressStyle = {
                                                width: exp.progressPercentage
                                            };
                                            
                                            return (
                                                <div key={i} className="skill">
                                                    <p style={{padding:' 1rem 0rem'}}>{exp.Stack}</p>
                                                    <div className="meter">
                                                        <span style={progressStyle}></span>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                            </Fade>
                        </MobileView>
                    </div>
                    <div className="column right">
                        <div className="skills-main">
                            <BrowserView>
                                <Fade direction="right" duration={1000}>
                                    <div className='groupSkill'>
                                        <p>Programming</p>
                                        <SoftwareSkill skills={skillsSection.softwareSkills1.languages} />
                                    </div>
                                    <div className='groupSkill'>
                                        <p>Web-Dev</p>
                                        <SoftwareSkill skills={skillsSection.softwareSkills1.webDev} />
                                    </div>
                                    <div className='groupSkill'>
                                        <p>Tools and Platforms</p>
                                        <SoftwareSkill skills={skillsSection.softwareSkills1.toolsAndPlatforms} />
                                    </div>
                                </Fade>
                            </BrowserView>
                            <MobileView>
                                <Fade direction="bottom" duration={1000}>
                                    <div className='groupSkill'>
                                        <p>Programming</p>
                                        <SoftwareSkill skills={skillsSection.softwareSkills1.languages} />
                                    </div>
                                    <div className='groupSkill'>
                                        <p>Web-dev</p>
                                        <SoftwareSkill skills={skillsSection.softwareSkills1.webDev} />
                                    </div>
                                    <div className='groupSkill'>
                                        <p>Tools and Platforms</p>
                                        <SoftwareSkill skills={skillsSection.softwareSkills1.toolsAndPlatforms} />
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

export default Skills;
