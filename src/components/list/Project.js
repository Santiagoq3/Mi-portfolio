import React from 'react'
import "./project.css"

export const Project = ({link,foto}) => {


    return (
        <div className='project'>
            <div className='projet-browser'>
                <div className='project-circle'>

                </div>
                <div className='project-circle'>

                </div>
                <div className='project-circle'>

                </div>
            </div>
            <a href={link} target="_blank">

                <img src={foto} className='project-img' />
            </a>
        </div>
    )
}
