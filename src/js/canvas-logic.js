"use strict";

import { player, monsters, grounds, items } from './assets';

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const canvas_height = document.body.clientHeight;
let canvas_width = document.body.clientWidth;

// assets object init
const assets = {
    player: player,
    monsters: monsters,
    grounds: grounds,
    items: items
};

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
 *  - rerender canvas 60 times per second
 * 
 *  - erase previous render ( maybe keep static elemnts ? )
 *  - take the positions of every elements that has to be displayed in canvas and place them
 *  - new render
 */

const render = (assets) => {
    let p = new Path2D(assets.player.skin);
    ctx.fill(p);
};

 const gameLoop = () => {
     render(assets);
     window.requestAnimationFrame(gameLoop);
 }

window.onload = init();