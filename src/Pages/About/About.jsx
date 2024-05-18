import React from 'react'
import Skills from '../../utils/Skills/Skills.jsx'
import './About.css'
import Experience from '../../utils/Experience/Experience.jsx'
import { programmingLanguages , MachineLearning, FullStack} from '../../Imports/skillsimports.js'

const About = () => {
    return (
        <div className="aboutWrapper">
            <div className="topWrapper">
                <div className="imageWrapper">
                    <img className="aboutImage" ></img>
                </div>

                <div className="expWrapper">
                    <div className="experience">
                        <h1>Hello! I am</h1>
                        <span className="name">Areesh Ali,</span>
                        <p className="aboutMe">
                            a Computer Science Student from Air University, Islamabad 
                            <br />
                            <br />  with a keen interest in Full Stack Development, Machine Learning, and Open Source. I have experience working with C++, Python, JavaScript, and Java. I have worked on projects ranging from developing APIs to building web applications. I am always eager to learn new technologies and work on challenging projects.-{" "}
                            <a href="https://github.com/https-404">
                                GitHub
                            </a>
                            <br />
                            <br />I have worked on projects ranging from developing APIs to building web applications.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bottomWrapper">
                <div className="expWrapper">
                    <h1 className="heading">Experience</h1>
                    <Experience
                        company="Dolat Capital"
                        years="October 2023 - Present"
                        title="Software Developer - C++"
                        summary={[
                            "Developed a Flask API with the help of multithreading(python) for monitoring applications, & a socket based FastAPI + React webapp for realtime monitoring of trading servers.",
                            "Introduced serialization & deserialization using Boost C++ reducing application start time from 5 minutes to under 1 second in case of failures/abrupt process termination.",
                            "Contributed to feature additions and bug fixes, optimizing system performance for a Trade Order Management System (C++, PSQL, QT, RTI, socket programming, multi-threading).",
                            "Upgraded C++ 98 code to C++ 17 with extensive infrastructure improvements. Collaborated on designing a database structure for new trading infrastructure.",
                        ]}
                    ></Experience>
                    
                </div>
            </div>
            <div className="bottomWrapper">
                <div className="skillsWrapper">
                    <h1 className="heading">Skills</h1>
                    <Skills
                        title="Programming Languages"
                        images={programmingLanguages}
                    ></Skills>
                    <Skills
                        title="Machine Learning"
                        images={MachineLearning}
                    ></Skills>
                    <Skills
                        title="Full Stack Devlopment"
                        images={FullStack}
                    ></Skills>
                </div>
            </div>
        </div>
    );
}

export default About