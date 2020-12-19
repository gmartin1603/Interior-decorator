import React from 'react';
import './Gallery.css'

function Gallery(props) {


    
    return (
        <div className="gallery">
            <div className="gallery__title">
                <h1>Title</h1>
            </div>
            <div className="gallery__images">
                {
                    props.imgs.map((item) => {
                        return (
                            <img src={item} alt="na"/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Gallery;