"use strict";

import { changeErrorMessage, gameUnsupported } from "./outside-game/error-message";
import { staticsEntitiesState } from "./entities-state/statics-entities/statics-entities-state";
import { entitiesState } from "./entities-state/entities/entities-state";

// Get canvas to be accessible in the entirety of this file
// Check if game functionnalites are supported by browser otherwise display error message
const canvas = document.getElementById('game-canvas');
if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
}
else {
    canvas.style.display = 'none';
    gameUnsupported();
}

// Initialize canvas width and height
// Call gameLoop function
const init = () => {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    window.requestAnimationFrame(gameLoop);
};

// Resize game window on request
window.addEventListener('resize', () => {
    let canvas_width = document.body.clientWidth;
    canvas.width = canvas_width;
});

// RENDERING
const render = (staticsEntities, entities) => {
    /**
     *  TODO
     * 
     *  1 - Erase previous render ( maybe keep static elemnts ? )
     *  2 - Take the positions of every elements that has to be displayed in canvas and place them
     *  3 - New render
     */


    console.log('render a frame');
    console.log(staticsEntities);
    console.log(entities);
};

// Function that is call on every frame (60 times by seconde)
const gameLoop = () => {
    /**
     * TODO :
     * 
     * - Take player inputs
     * - Change player pos from inputs
     * - pass info to render function below
     */
    render(staticsEntitiesState, entitiesState);
    window.requestAnimationFrame(gameLoop);
}

window.onload = init();