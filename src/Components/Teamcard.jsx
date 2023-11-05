import React from 'react'
import './teamcard.css'
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons'
const Teamcard = ({name, role, subRole, styles, imageUrl, linkurl, giturl}) => {
    let newstyle = {}
    let newstylefornormaldiv = {}
    if(styles == true){
        newstyle = {
            //background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1.0)), url(${imageUrl})`,
            height: '250px',
            width : '100%',
            marginTop : '20px'
        }
        newstylefornormaldiv = {
            padding: '2vw 2vw',
            fontSize: '4vw'
        }
    }else{
        newstyle = {
            //background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(189, 231, 232, 0.3)), url(${imageUrl})`,
        }
    }
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
  return (
    <div className='cardparent' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={newstyle} >
        <div className="imagediv">
            <img src={imageUrl} alt="" />
        </div>
        <div className={`cardnormaldiv ${isHovered ? 'hidden' : ''}`} style={newstylefornormaldiv}>
            <h3>{name}</h3>
            <p>{role}</p>
            <p>{subRole}</p>
        </div>
        {isHovered ? <div className="cardhoverdiv">
            <SocialIcon url={linkurl} target='_blank' />
            <SocialIcon url={giturl} target='_blank' />
        </div> : null}
    </div>
  )
}

export default Teamcard