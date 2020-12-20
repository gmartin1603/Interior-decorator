import React from 'react';
import './About.css'

function About(props) {
    return (
        <div className="about">
            <div className="about__banner">
                <h2>Catchy Title</h2>
            </div>
            <div className="about__main">
                <div className="about__left">
                    <img src="https://i.ibb.co/5c6Hbpj/received-3821827844528874.jpg" alt=""/>
                </div>
                <div className="spacer"></div>
                <div className="about__right">
                <div className="about__blurb">
                    <h4>Collaborative Design</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe quos qui officiis repudiandae consequuntur nemo rem, repellat officia doloribus itaque repellendus cupiditate nam totam amet. Harum natus error asperiores.    
                    </p>   
                    </div> 
                <div className="about__blurb">
                    <h4>Streamlined Process</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti praesentium maiores ex nulla dolor quidem dolores quis, consectetur repellat? Odio nemo non laudantium voluptatibus doloribus numquam incidunt laboriosam porro fugiat?
                    </p>   
                    </div> 
                <div className="about__blurb">
                    <h4>Wellness + Function</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem nam ad incidunt laboriosam eum quos tempora necessitatibus. Cumque minus recusandae modi, porro natus, odio ducimus tenetur quae blanditiis odit alias?
                    </p>   
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default About;