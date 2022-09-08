import React from 'react'

function Skills_card(props) {
    return (
        <div className="skill_box">
            <button className='btn_shadow skill_btn' title={props.title}>
                {props.icon}
            </button>
        </div>
    )
}

export default Skills_card