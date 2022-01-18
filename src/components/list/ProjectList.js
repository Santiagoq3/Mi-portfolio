import React from 'react'
import { Project } from './Project'
import "./projectlist.css"

import blogr from "../../images/blogrladingpage.png"
import restserver from "../../images/restserver.png"
import linkeding from "../../images/linkedinclone.png"
import productpagecomponent from "../../images/productpagecomponent.png"
import countriesspa from "../../images/countriesspa.png"

const proyectos = [

    {
        id:1,
        link: "https://github.com/Santiagoq3/RestServer",
        foto: restserver,

    },
    {
        id:2,
        link: "",
        foto: linkeding,

    },
    {
        id:3,
        link: "https://santiagoq3.github.io/ProductPageComponent/",
        foto: productpagecomponent,

    },
    {
        id:4,
        link: "https://santiagoq3.github.io/CountriesAppSPA/",
        foto: countriesspa,

    },
    {
        id:5,
        link: "https://santiagoq3.github.io/BlogrLandingPage/",
        foto: blogr,

    },
]

export const ProjectList = () => {
    return (
        <div className='projectlist'>
            <div className='projectlist-texts'>
                <h1 className='projectlist-title'>Mis proyectos</h1>
                <p className='projectlist-description'>
                    Estos son los proyectos que he realizado como fullstack developer
                </p>
            </div>
            <div className='projectlist-list'>
                {
                    proyectos.map(proyecto=>{
                        return <Project key={proyecto.id} link={proyecto.link} foto={proyecto.foto} />
                    })
                }
            </div>
        </div>
    )
}
