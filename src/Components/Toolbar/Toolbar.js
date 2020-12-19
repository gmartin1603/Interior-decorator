import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../ToggleButton/ToggleButton';
import './Toolbar.css'

function Toolbar(props) {
    return (
        <div className="toolbar">
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div className="toggle__button">
                        <ToggleButton click={props.handleClick}/>
                    </div>
                    <div className="toolbar__logo">
                        <Link to="/">
                            <img src="https://i.ibb.co/YdGPTh1/logo-transparent.png" alt=""/>
                        </Link>
                    </div>
                    <div className="spacer"></div>
                    <div className="toolbar__navigation__items">
                        <ul>
                            <li><a href="/">About us</a></li>
                            <li><Link to="/Portfolio">Portfolio</Link></li>
                            <li><Link to="/Services">Services</Link></li>
                            <li><a href="/">Consultation</a></li>
                            <li><a href="/">Contact</a></li>
                            {/* <li><a href="/">Reviews</a></li> */}
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Toolbar;