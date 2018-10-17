import React, { Component } from 'react'
import Image from "../Image"
import Controls from "../Controls"

export default class Carousel extends Component {
    render() {
        const Carousel = ({
            img,
            selectorCount,
            goToPhoto,
            currentIndex,
            nextPhoto,
            fade
        })
        return (
            <div className="carousel">
                <Image
                    img={img}
                    nextPhoto={nextPhoto}
                    currentIndex={currentIndex}
                    fade={fade}
                />
                <Controls
                    selectorCount={selectorCount}
                    goToPhoto={goToPhoto}
                    currentIndex={currentIndex}
                    fade={fade}
                />
            </div>
        );


    }
}
