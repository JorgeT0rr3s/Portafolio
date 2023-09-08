import React from 'react'
import '../Styles/Cards.css'
import { BiLogoGithub, BiLinkExternal, } from "react-icons/bi";

function Cards({ title, imagen, link, linkGit, description }) {
    return (

        <div className="card-content">
            <div className='image-card-container'>
                <img className="image-card" src={imagen} alt={title} />
            </div>
            <div className='info-card'>
                <h3 className="card-title">{title}</h3>
                <p className="card-body">
                    {description}
                </p>
                <div className='url-btn'>
                    <a href={linkGit} className=" btn button1 btnfos btnfos-5" rel='noopener noreferrer' aria-label='repo' target='_blank' >
                        Repo
                        <BiLogoGithub style={{ marginLeft: '8px' }} />
                    </a>

                    <a href={link} className=" btn button2" rel='noopener noreferrer' aria-label='Demo' target='_blank' >
                        Demo
                        <BiLinkExternal style={{ marginLeft: '8px' }} />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Cards