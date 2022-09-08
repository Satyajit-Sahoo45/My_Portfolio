import React from "react"
import "./Projects.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"

const Portfolio = () => {
  return (
    <>
      <section className='Projects top res_page' id='projects'>
        <div className='container'>
          <div className='heading text-center '>
            {/* <h4>VISIT MY PROJECTS AND KEEP YOUR FEEDBACK</h4> */}
            <h1>My Projects</h1>
          </div>

          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} id={value.id} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} link={value.link} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
