import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className='contactWrapper'>
            <h1 className='contactHeading'>Hello there. Feel free to drop me a text!</h1>
            <div className='contactIconWrapper'>
                <a href='https://www.linkedin.com/in/areesh-ali/'><FontAwesomeIcon className='contactIcons' icon={faLinkedin} /><p className='contactTags'>LinkedIn</p></a>
                <a href='https://github.com/https-404'><FontAwesomeIcon className='contactIcons' icon={faGithub} /><p className='contactTags'>GitHub</p></a>
                 <a href='https://www.instagram.com/not__areesh'><FontAwesomeIcon className='contactIcons' icon={faInstagram} /><p className='contactTags'>Instagram</p></a> 
                <a href='mailto:areesh.ali.abd@gmail.com'><FontAwesomeIcon className='contactIcons' icon={faEnvelopeOpenText} /><p className='contactTags'>Gmail</p></a>
            </div></div>
    )
}

export default Contact