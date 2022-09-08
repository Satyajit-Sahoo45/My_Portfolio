import React from "react"

const Card = (props) => {
  return (
    <>
        <tr>
          <td>{props.qualification}</td>
          <td>{props.passing}</td>
          <td><a href={props.link} target="_blanck">{props.institution}</a></td>
          <td>{props.mark}</td>
        </tr>

    </>
  )
}

export default Card
