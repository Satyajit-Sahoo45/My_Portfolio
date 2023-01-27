import React, { useEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css"

const Card = (props) => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <>
      <div data-aos="flip-left" className='box btn_shadow'>
        {props.image}
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </>
  )
}

export default Card
