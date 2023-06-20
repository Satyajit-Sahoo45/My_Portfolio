import React, { useEffect } from "react"
import "./Home.css"
import Typewriter from 'typewriter-effect';
import Aos from "aos";
import "aos/dist/aos.css"

const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <>
      <section data-aos="flip-up" className='container home res_page' id='home'>
        <div className='f_flex top'>
          <div className='home_content'>

            <h1>
              Hi, I’m <span>Satyajit Sahoo</span>
            </h1>
            <h2>
              <span>
                <Typewriter
                  options={{
                    strings: [' a Web Developer', 'Looking for an opportunity'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>

            <p>
              Ex-Full-Stack intern at Solar Secure Solution. I achive 5* at HackerRank and 2* at CodeChef.
            </p>

            <div className='home_btn d_flex'>
              <div className='col_1'>
                <h4>CONNECT WITH ME</h4>
                <div className='button skill_grid f_flex'>
                  <a href="https://twitter.com/Satyaji33351978" target="_blanck">
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'></i>
                    </button>
                  </a>
                  <a href="https://www.instagram.com/satyajitsipun45/" target="_blanck">
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                    </button>
                  </a>
                  <a href="https://www.linkedin.com/in/satyajit-sahoo-28052001/" target="_blanck">
                    <button className='btn_shadow'>
                      <i className='fab fa-linkedin-in'></i>
                    </button>
                  </a>
                  <a href="https://github.com/Satyajit-Sahoo45" target="_blanck">
                    <button className='btn_shadow'>
                      <i className="fa-brands fa-github"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
