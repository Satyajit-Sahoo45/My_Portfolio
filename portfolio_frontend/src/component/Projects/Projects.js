import React from "react"
import "./Projects.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"

const Portfolio = () => {
  const githubLink = "https://github.com/Satyajit-Sahoo45";
  return (
    <>
      <section className='Projects top res_page container' id='projects'>
        <div className='container'>
          <div className='heading '>
            <h1>My Projects</h1>
          </div>

          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} id={value.id} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} link={value.link} />
            })}
          </div>
          <button className="btn_shadow align_end mtop">
            <a href={githubLink} target="_blanck">
              VIEW MORE <i class='fas fa-chevron-right '></i>
            </a>
          </button>
        </div>

      </section>
    </>
  )
}

export default Portfolio
