import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        {props.image}
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </>
  )
}

export default Card
