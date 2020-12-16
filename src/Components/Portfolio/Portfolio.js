import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css'

function Portfolio(props) {
    return (
        <div className='portfolio'>
            <div className="portfolio__title">
            <h1>Portfolio</h1>
            </div>
            <div className="portfolio__left">
                <h2>Exterior</h2>
                <Link to="/Exterior">
                    <img src="https://i.ibb.co/7SmpdZQ/FB-IMG-1607366925723.jpg" alt="Exterior of home"/>
                </Link>
            </div>
            <div className="portfolio__right">
                <h2>Interior</h2>
                <Link to="Interior">
                    <img src="https://i.ibb.co/1ZB653g/FB-IMG-1607366649118.jpg" alt="Kitchen"/>
                </Link>
            </div>
        </div>
    );
}

export default Portfolio;