"use strict";

import { changeErrorMessage, gameUnsupported } from "./outside-game/error-message";

// get canvas to be accessible in the entirety of this file
// check if game functionnalites are supported by browser otherwise display error message
const canvas = document.getElementById('game-canvas');
if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
}
else {
    canvas.style.display = 'none';
    gameUnsupported();
}

// initialize canvas width and height
// call gameLoop function
const init = () => {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    window.requestAnimationFrame(gameLoop);
};

// resize game window on request
window.addEventListener('resize', () => {
    let canvas_width = document.body.clientWidth;
    canvas.width = canvas_width;
});

// RENDERING

const render = () => {
    /**
     *  TODO
     * 
     *  1 - erase previous render ( maybe keep static elemnts ? )
     *  2 - take the positions of every elements that has to be displayed in canvas and place them
     *  3 - new render
     */
    console.log('render a frame');
};

// this is the function that is call on every frame (60 times by seconde)
const gameLoop = () => {
    render();
    window.requestAnimationFrame(gameLoop);
}

window.onload = init();