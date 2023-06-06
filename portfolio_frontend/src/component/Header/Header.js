import React from "react"
import "./header.css"

const Header = () => {
  
  return (
    <>
      <header className='header'>
        <div className='container d_flex reverse'>

        <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i class="fa-solid fa-bars"></i>
          </label>

          <div className='logo'>
            <h1> SS </h1>
          </div>

          <div className='navlink'>
            <ul className="link f_flex uppercase">
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>what i do</a>
              </li>
              <li>
                <a href='#projects'>projects</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>

            </ul>

          </div>
        </div>
      </header>
    </>
  )
}

export default Header
