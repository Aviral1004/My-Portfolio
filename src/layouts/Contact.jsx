import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css";
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const areaRef = useRef("");
  const [clicked, setClicked] = useState(false);
  
  const notify = () => {
    if (emailRef.current.value === "" || areaRef.current.value === "") {
      toast.error("Please fill your details");
    }
    else if (emailRef.current.value || areaRef.current.value) {
      toast.success("Thanks for reaching out :)");
    }
    setClicked(!clicked);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_reu71qg', 'template_spjo2m9', form.current, '4iaq0XslboIykt1TU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      nameRef.current.value = "";
      emailRef.current.value = "";
      areaRef.current.value = "";
  };

  return (
    <div id='contact' className='outerContact'>
        <div className="mainContact">
        <motion.form className="formOuter" ref={form} onSubmit={sendEmail} 
        initial = {{opacity: 0, transform: "translateX(-25%)"}} 
        whileInView={{opacity: 1, transform: "translateX(0)"}} 
        transition={{duration: 1}}>
            <label className='formLabel'>Your Name</label>
            <input className='formInput' ref={nameRef} placeholder='Enter your name' type="text" name="from_name" />
            <label className='formLabel'>Your Email</label>
            <input className='formInput' ref={emailRef} placeholder='Enter your email' type="email" name="reply_to" required />
            <label className='formLabel'>Your Message</label>
            <textarea className='textArea' ref={areaRef} placeholder='Enter your message' name="message" required />
            <input className={clicked ? "formBtn click" : "formBtn"} type="submit" onClick={notify} value="Send Message" />
            <ToastContainer style={{width:"70vw", height:"10vh", marginTop:"-2rem"}} position='top-left' autoClose={1000} />
          </motion.form>
          <motion.div className="contactImgDiv" 
          initial = {{opacity: 0, scale: 0}} 
          whileInView={{opacity: 1, scale : 1}} 
          transition={{duration: 1}}>
            <dotlottie-player src="https://lottie.host/78c7c984-cc26-432c-85de-9381527ce47d/tLs6FervyW.json" background="transparent" speed="1" style={{width: "90%", height: "135%"}} loop autoplay></dotlottie-player>
          </motion.div>
        </div>
    </div>
  );
};

export default Contact;