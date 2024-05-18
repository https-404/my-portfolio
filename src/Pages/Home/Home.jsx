import React from 'react'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import './Home.css'

const Home = () => {
    return (
        <React.Fragment>
            <About />
            <Projects />
            <Contact />
        </React.Fragment>
    )
}

export default Home