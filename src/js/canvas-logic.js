"use strict";

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const canvas_height = document.body.clientHeight;
let canvas_width = document.body.clientWidth;

// INTIALIZATION AND RESIZE WINDOW

const init = () => {
    canvas.width = canvas_width;
    canvas.height = canvas_height;
    window.requestAnimationFrame(gameLoop);
};

window.addEventListener('resize', () => {
    canvas_width = document.body.clientWidth;
    canvas.width = canvas_width;
});

// RENDERING

/**
 * 
 *  - rerender canvas 60 time by second
 * 
 *  - erase previous render ( maybe keep static elemnts ? )
 *  - take the positions of every elements that has to be displayed in canvas and place them
 *  - new render
 */

const render = () => {
    console.log('render function');
};

 const gameLoop = () => {
     render();
     window.requestAnimationFrame(gameLoop);
 }

window.onload = init();