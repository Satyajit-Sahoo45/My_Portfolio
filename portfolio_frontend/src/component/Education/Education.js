import React from "react"
import "./Education.css"
import EducationApi from "./EducationApi"
import Card from "./Card"

const Education = () => {
  return (
    <>
      <section className='Education res_page' id='education'>
        <div className='container top'>
          <div className='heading text-center'>
            <h1>My Education</h1>
          </div>


          <div className='content-section mtop'>
            <div className='left'>
              <div className='content'>
                <table>
                  <tr>
                    <th>Qualification</th>
                    <th>Passing Year</th>
                    <th>Institution</th>
                    <th>Mark</th>
                  </tr>

                  {EducationApi.map((val, id) => {
                    if (val.category === "education") {
                      return <Card key={id} qualification={val.qualification} passing={val.passing} institution={val.institution} mark={val.mark} link={val.link} />
                    }
                  })}

                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Education
