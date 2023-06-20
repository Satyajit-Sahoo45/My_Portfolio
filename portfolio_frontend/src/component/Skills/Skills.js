import React from 'react'
import "./Skills.css";
const Skills = () => {
    return (
        <div className="container top res_page ">
            <div className="container">
                <div className='heading'>
                    <h1>Personal Info</h1>
                    <p className='primary_color'> Get To Know More About Me</p>
                </div>

                <div className="skill_content flex_center">
                    <div className=" btn_shadow about_me">
                        <span className='primary_color'> Hello, </span>
                        <p> My name is is Satyajit Sahoo and I'm a passionate Web Developer using web technologies to build amazing products and focusing on solving problems to enhancing my skills using the power of technology.</p>
                        <p> I will love to hear from you about job opportunity.</p>
                    </div>
                    <div className='text-center mleft skill_container'>
                        <div className='btn_shadow'>
                            <div className='bottom primary_color'>Skills</div>
                            <div className="skill_grid">
                                <p className='skill btn_shadow'> Java </p>
                                <p className='skill btn_shadow'> JavaScript </p>
                                <p className='skill btn_shadow'> React.js </p>
                                <p className='skill btn_shadow'> Node.js </p>
                                <p className='skill btn_shadow'> Express.js </p>
                                <p className='skill btn_shadow'> MongoDB </p>
                                <p className='skill btn_shadow'> HTML </p>
                                <p className='skill btn_shadow'> CSS </p>
                                <p className='skill btn_shadow'> GIT </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Skills;