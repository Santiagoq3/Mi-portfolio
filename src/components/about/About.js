import React from 'react'
import "./about.css"
import me from "../../images/santy.jpeg"
export const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <div className='about-card bg'></div>
                <div className='about-card'>
                    <img className='about-img' src={me} />
                </div>
            </div>
            <div className='about-right'>
                <h1 className='about-title'>
                    Sobre mi
                </h1>
                
                <p className='about-description'>
                    Soy Santiago y tengo 20 años. Estudie y aprendi programacion en la Tecnicatura universitaria en Programacion en  la universidad tecnologica de la provincia de Tucuman, decidi orientar mi carrera como programador a la tecnologias web. Actualmente me encuentro especializandome en backend en coderhouse, en un futuro me veo trabajando como fullstack y mobile developer.
                </p>
                <div className='about-award'>
                    <img className='about-award-img' src='' alt='' />
                    <div className='about-award-texts'>
                    </div>
                </div>
            </div>
        </div>
    )
}
