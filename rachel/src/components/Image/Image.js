import React, { Component } from 'react'

export default class Controls extends Component {
    render() {
        const Image = ({
            img,
            nextPhoto,
            currentIndex,
            fade
        }) 
        return(
                <div
                    className={fade ? "image fade" : "image"}
                    onClick={() => { nextPhoto(currentIndex) }}
                > <img src={img} />
                    <img
                        className="shadow"
                        src={img}
                    />
                </div>
            );
    }
}
