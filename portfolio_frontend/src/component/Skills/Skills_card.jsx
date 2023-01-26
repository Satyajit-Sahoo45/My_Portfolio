import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skills_card(props) {
    return (
        <div className="skill_box">
            {/* <button className='btn_shadow skill_btn' title={props.title}>
                {props.icon}
            </button> */}
            <CircularProgressbar
                value={props.percentage}
                text={`${props.percentage}%`}
                circleRatio={1}
                styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: 'butt',
                    textSize: '16px',
                    pathTransitionDuration: 1,
                    pathColor: `${props.pathcolor}`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })} />;

            <div>
                <p  style={{ "textAlign": "center", "color": `${props.pathcolor}`, "fontSize":"20px" }}>{props.icon}</p>
                <p style={{ "textAlign": "center", "color": "white" }}> ({props.name}) </p>
            </div>
        </div>
    )
}

export default Skills_card