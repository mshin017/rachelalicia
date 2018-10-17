import React, { Component } from 'react'


export default class Selector extends Component {
    render() {
        const Selector = ({
            currentIndex,
            i,
            goToPhoto
        })
        return (
                <li
                    className={i === currentIndex ? "selected" : ""}
                    key={i}
                    onClick={() => { goToPhoto(i) }}
                />
            );
    }
}

