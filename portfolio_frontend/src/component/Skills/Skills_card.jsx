import React, {useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Aos from "aos";
import "aos/dist/aos.css"

function Skills_card(props) {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div className="skill_box" data-aos="fade-up">
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