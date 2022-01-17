import React from 'react'
import { Project } from './Project'
import "./projectlist.css"
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
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}
