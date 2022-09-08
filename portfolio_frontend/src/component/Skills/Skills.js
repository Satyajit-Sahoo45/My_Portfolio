import React from 'react'
import mongo from "../pic/mongo.png";
import "./Skills.css";
import Skills_info from "./Skills_info"
import Skills_card from './Skills_card';

const Skills = () => {
    return (
        <div className="skills top res_page " id="skills">
            <div className="container">
                <div className='heading'>
                    <h1>Skills</h1>
                </div>

                <div className="skill_ontent">
                    <div className="box_s skill_grid">

                        {Skills_info.map((value, index) => {
                            return <Skills_card name={value.name} title={value.item} icon={value.icon} />
                        })}

                        <div className="skill_box">
                            <button className='btn_shadow skill_btn' title="mongoDB">
                                <img src={mongo} alt='skill' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;