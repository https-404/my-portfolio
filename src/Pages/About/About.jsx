import Skills from '../../utils/Skills/Skills.jsx'
import profileabout from '../../assets/profile/profileabout.png'
import experience from '../../assets/profile/expirience.svg'
import codingskills from '../../assets/profile/codingskills.svg'
import './About.css'
import Experience from '../../utils/Experience/Experience.jsx'
import { programmingLanguages ,  FullStack , tools} from '../../Imports/skillsimports.js'

const About = () => {
    return (
        <div className="aboutWrapper">
            <div className="topWrapper">
                <div className="imageWrapper">
                    <img className="aboutImage" src= {profileabout} ></img>
                </div>

                <div className="expWrapper">
                    <div className="experience">
                        <h1>Hello! I am</h1>
                        <span className="name">Areesh Ali,</span>
                        <p className="aboutMe">
                            a Computer Science Student from Air University, Islamabad 
                            <br />
                            <br />  with a keen interest in Full Stack Development, Machine Learning, and Open Source. I have experience working with C++, Python, JavaScript, and Java. I have worked on projects ranging from developing APIs to building web applications. I am always eager to learn new technologies and work on challenging projects.-{" "}
                            <a  className="gitlink" href="https://github.com/https-404">
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
                <img className="aboutImage" src= {experience} ></img>
                    <h1 className="heading">Experience</h1>
                    <Experience
                        company="Mercurial Minds (pvt) Ltd."
                        years="June 2023 - September 2023"
                        title="Software Development Intern"
                        summary={[
                            "Developed a Flutter application following the MVVM architecture pattern as a personal project, demonstrating proficiency in mobile app developmen",
                            "Conducted data cleaning and preprocessing tasks using Python, ensuring data accuracy and consistency.",
                            "Automated time tracking using Clockify with Google Sheets utilizing Google Apps Script, streamlining workflow processes and improving efficiency."
                            
                        ]}
                        img="/src/assets/company/mm.png"
                    ></Experience>
                    <Experience
                    company="Bytewise Limited"
                    years="June 2024 - September 2024"
                    title="Felowship | Machine Learning & Deep Learning"
                    summary={[
                        "Worked on transformer-based NLP models and fine-tuned pre-trained models for text classification and analysis.",
                        "Implemented CNN models for image processing tasks, improving accuracy through data augmentation and fine-tuning.",
                        "Conducted data cleaning and preprocessing for NLP and computer vision tasks, ensuring high-quality input for model training.",
                        "Reviewed and fine-tuned large language models (LLMs) for natural language understanding and generation tasks.",
                        "Built a crops prediction model using scikit-learn, leveraging machine learning algorithms for accurate forecasting."
                    ]}
                    img="/src/assets/company/bw.png"
                    ></Experience>
                </div>
            </div>
            <div className="bottomWrapper">
                <div className="skillsWrapper">
                <img className="aboutImage" src= {codingskills} ></img>
                    <h1 className="heading">Skills</h1>
                    <Skills
                        title="Programming Languages"
                        images={programmingLanguages}
                    ></Skills>
                    
                    <Skills
                        title="Full Stack Devlopment"
                        images={FullStack}
                    ></Skills>
                    <Skills
                        title="Tools"
                        images={tools}
                    ></Skills>
                </div>
            </div>
        </div>
    );
}

export default About