import React, { useState } from "react"

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
        {/* <div className='button d_flex mtop center'>
          <button className='btn_shadow'>
            <a href={props.link} target="_blanck"> VIEW PROJECT  <i class='fas fa-chevron-right'></i></a>
          </button>
        </div> */}

        <div className="center d_flex">
          <button className='glowing-btn'> <a href={props.link} target="_blanck">
            <span className='glowing-txt'>V<span className='faulty-letter'>IEW</span> PROJECT <i class='fas fa-chevron-right'></i></span></a>
          </button>
        </div>
      </div>
    </>
  )
}

export default Card
