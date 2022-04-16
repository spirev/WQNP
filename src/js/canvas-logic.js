"use strict";

import { changeErrorMessage, gameUnsupported } from "./outside-game/error-message";

// get canvas element and its context here to be accessible by all part of this file
const canvas = document.getElementById('game-canvas');
if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
}
else  {
    canvas.style.display = 'none';
    gameUnsupported();
}

// initialization and window resizing
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
/**
 *  - erase previous render ( maybe keep static elemnts ? )
 *  - take the positions of every elements that has to be displayed in canvas and place them
 *  - new render
 */

const render = () => {
    console.log('render a frame');
};

const gameLoop = () => {
    render();
    window.requestAnimationFrame(gameLoop);
}

window.onload = init();