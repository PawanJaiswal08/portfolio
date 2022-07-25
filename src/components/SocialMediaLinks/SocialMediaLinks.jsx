import React from 'react';
import './SocialMediaLinks.css'
import { socialMedia } from '../../Portfolio';

const SocialMediaLinks = () => {
    
    if (!socialMedia.display) {
        return null;
    }
    
    return (
        <div className="social-media-div">
            {
                socialMedia.links && socialMedia.links.map((link, i) => {
                    return (
                        <a key={i} href={link.url} className={link.name + " icon-button"} target="_blank" rel="noopener noreferrer">
                            <img src={link.icon} alt={link.name} />
                            <span></span>
                        </a>
                    )
                })
            }
        </div>
    )
};

export default SocialMediaLinks;
