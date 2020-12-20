import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../ToggleButton/ToggleButton';
import './Toolbar.css'

function Toolbar(props) {
    const [show, setShow] = useState(false)

    const showContact = () => {
        setShow(!show)
    }

    let contactClass = "contact__info__hidden"
    if(show) {
        contactClass = "contact__info"
    }
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
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Portfolio">Portfolio</Link></li>
                            <li><Link to="/Services">Services</Link></li>
                            <li><a href="/">Consultation</a></li>
                            <div className="contact__container" onClick={showContact}>
                                <li><Link>Contact</Link></li>
                                <div className={contactClass}>
                                    <a href="">mail@email.com</a>
                                    <a href="">Facebook</a>
                                    <a href="">Instagram</a>
                                </div>
                            </div>
                            {/* <li><a href="/">Reviews</a></li> */}
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Toolbar;