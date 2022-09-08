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
          <div>
            <p> <i class="fa-sharp fa-solid fa-envelope"></i> sahoosatyajit2801@gmail.com</p>
            <p> <i class="fa-solid fa-phone"></i> 7873585158</p>
          </div>
          <p>© {new Date().getFullYear()}. All rights reserved. @Satyajit_Sahoo</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
