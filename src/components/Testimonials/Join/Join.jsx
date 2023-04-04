import React from 'react'
import "./Join.css"
import emailjs from '@emailjs/browser'

const Join = () => {

    //usage of EmailJS

    const form = React.useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_39ruba6', 'template_6bv742e', form.current, 'vv-Jp-GHnU48-Rtih')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    
    <div className="Join" id="join-us">

        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'>WITH US?</span>

            </div>
        </div>
        <div className="right-j">
            <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" id="" placeholder='Enter Your Email address' />
                <button className='btn btn-j'>Join now</button>
            </form>
        </div>
    </div>
  )
}

export default Join