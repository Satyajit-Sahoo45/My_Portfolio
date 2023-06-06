import React from "react";

const Card = (props) => {

  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' />
        </div>
        <div className='category d_flex'>
          <span>{props.category}</span>
        </div>

        <div className="center d_flex">
          <button className='btn_shadow'> <a href={props.link} target="_blanck">
            VIEW PROJECT <i class='fas fa-chevron-right '></i></a>
          </button>
        </div>
      </div>
    </>
  )
}

export default Card
