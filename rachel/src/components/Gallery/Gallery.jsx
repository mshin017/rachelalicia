import React, { Component } from 'react';
import './Gallery.scss'
import army from "../../images/army.jpg"
import beach from '../../images/beach.jpg'
import bed from '../../images/bed.JPEG'
import bed2 from '../../images/bed2.jpeg'
import pool from '../../images/pool1.jpg'
import pool2 from '../../images/pool2.jpg'
import pyramid from "../../images/pyramid1.jpg"
import pyramid2 from '../../images/pyramid2.JPEG'
import pyramid3 from '../../images/pyramid3.jpg'
import breezy from "../../images/breezy.JPG"
import dtla from '../../images/dtla.jpg'
import gang from '../../images/gang.JPG'
import rooftop1 from '../../images/rooftop1.jpg'
import wall from '../../images/wall.JPG'


const images = [
    army, beach, bed, bed2, pool, pool2, pyramid, pyramid2, pyramid3, wall, breezy, dtla, gang, rooftop1,
];

export default class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            images: images,
            currentImg: images[3],
            fade: true
        }
    }

    componentDidMount() {
        this.removeFade();
    }

    goToPhoto(i) {
        this.setState({
            currentImg: this.state.images[i],
            fade: true
        });

        this.removeFade();
    }

    nextPhoto(i) {
        const images = this.state.images.slice();

        if (i + 1 < images.length) {
            this.setState({
                fade: true,
                currentImg: images[i + 1]
            });
        } else {
            this.setState({
                fade: true,
                currentImg: images[0]
            });
        }

        this.removeFade();
    }

    removeFade() {
        setTimeout(() => {
            this.setState({ fade: false });
        }, 1000)
    }

    render() {

        const bgStyle = {
            background: 'url('
                + this.state.currentImg
                + ') no-repeat center center fixed'
        }

        const currentIndex = this.state
            .images
            .slice()
            .indexOf(
                this.state
                    .currentImg);

        return (
            <div className="app">
                <div
                    className={this.state.fade ? 'bg-img fade-bg' : 'bg-img'}
                    style={bgStyle}
                />
                <Carousel
                    img={this.state.currentImg}
                    currentIndex={currentIndex}
                    selectorCount={this.state.images.length}
                    goToPhoto={this.goToPhoto.bind(this)}
                    nextPhoto={this.nextPhoto.bind(this)}
                    fade={this.state.fade}
                />
            </div>
        );
    }
};

const Carousel = ({
    img,
    selectorCount,
    goToPhoto,
    currentIndex,
    nextPhoto,
    fade
}) => (
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

const Image = ({
    img,
    nextPhoto,
    currentIndex,
    fade
}) => (
        <div
            className={fade ? "image fade" : "image"}
            onClick={() => { nextPhoto(currentIndex) }}
        > <img src={img} alt="img1"/>
            <img
                className="shadow"
                src={img}
                alt="img2"
            />
        </div>
    );

const Controls = ({
    selectorCount,
    goToPhoto,
    currentIndex,
    fade
}) => {
    const selectors = [];

    for (var i = 0; i < selectorCount; i += 1) {
        selectors.push(
            <Selector
                currentIndex={currentIndex}
                i={i}
                key={i}
                goToPhoto={goToPhoto}
            />
        );
    }

    return (
        <ul className={fade ? "controls stretch-controls" : "controls"}>
            {selectors}
        </ul>
    );
};

const Selector = ({
    currentIndex,
    i,
    goToPhoto
}) => (
        <li
            className={i === currentIndex ? "selected" : ""}
            key={i}
            onClick={() => { goToPhoto(i) }}
        />
    );

