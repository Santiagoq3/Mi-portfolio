import React, { useRef } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';
import {send} from "emailjs-com"
export const Contact = () => {


     const formRef = useRef()

     const handleSubmit = (e)=>{
        e.preventDefault()

        emailjs.sendForm('service_cq3ayds', 'template_mdwzjhq', formRef.current, 'user_bDxJ288JIS3F6m0oVCCqG')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
     }


    return (
        <div className='contact'>
            <div className='contact-bg'>

            </div>
            <div className='contact-wrapper'>
                <div className='contact-left'>
                    <h1 className='contact-title'>Contactame<span className='contact-signo'>!</span></h1>
                    <div className='contanct-info'>
                        <div className='contact-info-item'>
                            <i className="fas fa-phone-square-alt"></i>
                            +543816296894
                        </div>
                        <div className='contact-info-item'>
                            <i className="fas fa-envelope"></i>
                            quipildorsantiago@gmail.com
                        </div>
                        <div className='contact-info-item'>
                            <a href='https://github.com/Santiagoq3' target="_blank" >

                                <i className=" fab fa-github"></i>

                            </a>
                            <a href='https://www.linkedin.com/in/santiago-quipildorjs/' target="_blank">

                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='contact-right'>
                   
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Nombre...' name='user_name' />
                        <input type="text" placeholder='Asunto' name='user_subject' />
                        <input type="email" placeholder='Email...' name='user_email' />
                        <textarea rows="5" placeholder='Mensaje...' name='message' />
                        <button type='submit'>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
