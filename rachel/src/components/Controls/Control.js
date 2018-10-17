import React, { Component } from 'react'
import Selector from '../Selector'

export default class Controls extends Component {
    render() {
        const Controls = ({
            selectorCount,
            goToPhoto,
            currentIndex,
            fade
        })
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

}