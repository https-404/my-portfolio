import React from 'react'
import './Skills.css'
const Skills = (props) => {
    var logos = []
    for (var i in props.images) {
        logos.push(<img key={i} src={props.images[i]}></img>)
    }
    return (
        <div className='skills'>
            <h1 className='skillsTitle'>{props.title}: </h1>
            {logos}
        </div>
    )
}

export default Skills