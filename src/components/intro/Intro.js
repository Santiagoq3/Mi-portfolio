import React from 'react'
import "./intro.css"

export const Intro = () => {
    return (
        <div className='intro'>
            <div className='intro-left'>
                
                <div className='intro-left-wrapper'>
                    <h2 className='intro-intro'>Hola, mi nombre es</h2>
                    <h1 className='intro-name'>Santiago</h1>
                    <div className='intro-title'>
                        <div className='intro-title-wrapper'>
                            <div className='intro-title-item'>
                                Fullstack developer
                            </div>
                        </div>
                    </div>
                    <div className='intro-description'>
                    Programador hace mas de dos años, orientado al desarrollo web trabajando con tecnologias Front-end y Backend-end.
                    </div>
                </div>

            </div>
            <div className='intro-right'>
                <div className='intro-bg'>

                </div>
            </div>
        </div>
    )
}

