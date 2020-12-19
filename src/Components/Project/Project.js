import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'

function Project(props) {
    return (
        <div className='project'>
            <div className="project__title">
                <h3>Description of work done</h3>
            </div>
            <div className="spacer"></div>
            <Link to={props.title}>
                <img src={props.img} alt=""/>
            </Link>
        </div>
    );
}

export default Project;