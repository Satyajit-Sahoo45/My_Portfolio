import React from 'react'
import "./Skills.css";
const Skills = () => {
    return (
        <div className="skills top res_page " id="skills">
            <div className="container">
                <div className='heading'>
                    <h1>Personal Info</h1>
                    <p className='primary_color'> Get To Know More About Me</p>
                </div>

                <div className="skill_content flex_center">
                    <div className="aboutMe display_center">
                        <span className='primary_color'> Hello, </span>
                        <p> My name is is Satyajit Sahoo and I'm a passionate Web Developer using web technologies to build amazing products and focusing on solving problems to enhancing my skills using the power of technology.</p>
                        <p> I will love to hear from you about job opportunity.</p>
                    </div>
                    <div>
                        <div className='text-center skill mbottom primary_color'>Skills</div>
                        <div className="grid-box">
                            <p className='skill'> Java </p>
                            <p className='skill'> JavaScript </p>
                            <p className='skill'> React.js </p>
                            <p className='skill'> Node.js </p>
                            <p className='skill'> Express.js </p>
                            <p className='skill'> MongoDB </p>
                            <p className='skill'> HTML </p>
                            <p className='skill'> CSS </p>
                            <p className='skill'> GIT </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Skills;