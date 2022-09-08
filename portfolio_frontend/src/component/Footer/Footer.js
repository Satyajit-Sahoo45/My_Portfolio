import React from "react"
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="res_page">
        <div className='conatiner text-center top'>
          <div className='img'>
            <h1> Portfolio </h1>
          </div>
          <p>© {new Date().getFullYear()}. All rights reserved. @Satyajit_Sahoo</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
