import React from 'react';
import './Home.css'

function Home(props) {
    return (
        <div className="home">
            <div className="home__row">
                <div className="home__image">
                    <img src="https://i.ibb.co/Y82PdWp/FB-IMG-1607366674200.jpg" alt=""/>
                </div>
                <div className="home__image">
                    <img src="https://i.ibb.co/bQBtXDF/FB-IMG-1607366808257.jpg" alt=""/>
                </div>
                <div className="home__image">
                    <img src="https://i.ibb.co/TPzq4nR/FB-IMG-1607366910614.jpg" alt=""/>
                </div>
                <div className="home__image">
                    <img src="https://i.ibb.co/tB7skB9/FB-IMG-1607366811409.jpg" alt=""/>
                </div>
            </div>
            <div className="home__row2">
                <h1>From pantry organization...</h1>
                <h1>to a total home remodle!</h1>
                <strong><p>There's no job too big or too small for L & K!</p></strong>
            </div>
        </div>
    );
}

export default Home;