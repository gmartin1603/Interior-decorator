import React from 'react';
import Project from '../Project/Project';
import './Exterior.css'

function Exterior(props) {
    return (
        <div className='exterior'>
            <Project
            img="https://i.ibb.co/rxpht4W/FB-IMG-1607370281910.jpg"
            />
            <Project
            img="https://i.ibb.co/DtgCccp/IMG953483.jpg"
            title="/Trailer"
            />
            <Project
            img="https://i.ibb.co/CwG93Y6/FB-IMG-1607366925723.jpg"
            />
        </div>
    );
}

export default Exterior;