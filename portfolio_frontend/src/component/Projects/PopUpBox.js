//import React, { useState } from "react"

//const PopUpBox = () => {
//  const [modal, setModal] = useState(false)

//  const toggleModal = () => {
//    setModal(!modal)
//  }

//  if (modal) {
//    document.body.classList.add("active-modal")
//  } else {
//    document.body.classList.remove("active-modal")
//  }
//  return (
//    <>
//      <button onClick={toggleModal} className='btn-modal'>
//        Open
//      </button>

//      {modal && (
//        <div className='modal'>
//          <div onClick={toggleModal} className='overlay'></div>
//          <div className='modal-content'>
//            <h2>Hello Modal</h2>
//            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.</p>
//            <button className='close-modal' onClick={toggleModal}>
//              CLOSE
//            </button>
//          </div>
//        </div>
//      )}
//    </>
//  )
//}

//export default PopUpBox



// {modal && (
//     <div className='modal'>
//       <div onClick={toggleModal} className='overlay'></div>
//       <div className='modal-content d_flex'>
//         <div className='modal-img left'>
//           <img src={props.image} alt='' />
//         </div>
//         <div className='modal-text right'>
//           <span>Featured - Design</span>
//           <h1>{props.title}</h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
//           <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
//           <div className='button f_flex mtop'>
//             <button className='btn_shadow'>
//               LIKE THIS <i class='far fa-thumbs-up'></i>
//             </button>
//             <button className='btn_shadow'>
//               <a href={props.link} target="_blanck" >VIEW PROJECT<i class='fas fa-chevron-right'></i></a>
//             </button>
//           </div>
//           <button className='close-modal btn_shadow' onClick={toggleModal}>
//             <i class='fas fa-times'></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   )}
