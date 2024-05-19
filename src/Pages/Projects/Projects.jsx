import React from 'react'
import './Projects.css'
import Projectcard from '../../utils/ProjectCard/ProjectCard.jsx'
import flutter from '../../assets/skills/frameworks/flutter.svg'
import firebase from '../../assets/skills/others/firebase.svg'

import nodejs from '../../assets/skills/frameworks/nodejs.svg'
import react from '../../assets/skills/frameworks/react.svg'
import javascript from '../../assets/skills/programminglanguages/javascript.svg'
import expressjs from '../../assets/skills/frameworks/expressjs.png'
import mysql from '../../assets/skills/databases/mysql.svg'
import blazor from '../../assets/skills/frameworks/blazor.png'
import dotnet from '../../assets/skills/frameworks/dotnet.png'

import {
    univents,
    talkie,
   kitchenkrust,
    airtime
}
from '../../Imports/ProjectImports.js'

const Projects = () => {
  return (
    <div className='pageWrapper'>
        <h1 className='projectsPageTitle'>Worked on Following Projects</h1>
                <div className='projectsWrapper'>
                    <Projectcard 
                        projectTitle='Univents'
                        image={univents}
                        github=''
                        techstack={[flutter, firebase]}
                        summary= "Univents is a Flutter and Firebase mobile app for university students to discover and stay updated on events happening in and around their campuses. It features event browsing, RSVPs, notifications, and secure user authentication."
                         ></Projectcard>
                    <Projectcard 
                        projectTitle='Talkie'
                        image={talkie}
                        github=''
                        techstack={[flutter, firebase]}
                        summary="Talkie is a chat app created with Flutter and Firebase, offering real-time messaging, group chats, multimedia support, and secure user authentication. It provides a simple interface for instant communication."
                    ></Projectcard>
                    <Projectcard 
                        projectTitle='KitchenKrust'
                        image={kitchenkrust}
                        github='https://kitchen-krust-fe.vercel.app/'
                        techstack={[react, nodejs, expressjs, firebase]}
                        summary="Kitchen Krust is a fast-food delivery website developed with React, Firebase, Node.js, and Express.js. Customers can browse the menu, place orders, and track deliveries in real-time, enhancing the online ordering experience."
                    ></Projectcard>
                    <Projectcard 
                        projectTitle='Airtime'
                        image={airtime}
                        github='https://air-time.azurewebsites.net/login'
                        techstack={[blazor, dotnet, mysql]}
                        summary="Airtime is an intra-university blogging site built with Blazor and .NET, enabling students to share blog posts, comment, and engage in discussions. It fosters knowledge sharing and community building within the university."
                    ></Projectcard>
      </div>

    </div>
)
}

export default Projects