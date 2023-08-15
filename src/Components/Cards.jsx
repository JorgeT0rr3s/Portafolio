import React from 'react'
import '../Styles/Cards.css'

function Cards() {
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="card-title">Something Awesome</h2>
                <p className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
                </p>
                <a href="#" className="button">
                    Learn More
                </a>
            </div>
        </div>
    )
}

export default Cards