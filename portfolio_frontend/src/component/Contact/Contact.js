import React, { useState } from "react"
import "./Contact.css"
import axios from "../Axios/axios";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    contact: "",
    email: "",
    subject: "",
    message: "",
  })

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
      // console.log(preVal);
    })
  }

  const formSubmit = (event) => {
    event.preventDefault();
    // console.log(data);

    axios
      .post("/portfolio/contactResponse", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      })
    window.location.reload();
  }


  return (
    <>
      <section className='Contact res_page' id='contact'>
        <div className='container top'>
          <div className='heading'>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='contact_box box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='name' value={data.name} autoComplete="off" onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='contact' value={data.contact} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} autoComplete="off" onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} autoComplete="off" onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} autoComplete="off" onChange={InputEvent}></textarea>
                </div>
                <div className="snd_btn">
                  <button className='btn_shadow send_btn'>
                    SEND <i className='fa fa-long-arrow-right'></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
