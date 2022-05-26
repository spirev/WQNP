"use strict";

import { changeErrorMessage, gameUnsupported } from "./outside-game/error-message";
import { initGame } from "./game-logic";
import { staticsEntitiesState, staticsEntitiesTools } from "./entities-state/statics-entities/statics-entities-state";
import { entitiesState, entitiesTools } from "./entities-state/entities/entities-state";

// RENDERING
const render = (ctx, staticsEntities, entities) => {
    console.log(staticsEntities);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // launch render function on every object in statics and none-statics entites
    staticsEntitiesTools.renderAllStaticsEntities(ctx);
    entitiesTools.renderAllEntities(ctx);

};

// Function that is call on every frame (60 times by seconde)
const gameLoop = (ctx, isInitRender = true) => {
    /**
     * TODO :
     * 
     * - Take player inputs
     * - Change player pos from inputs
     * - pass info to render function below
     */
    if (isInitRender) {
        initGame(ctx);
        isInitRender = false;
    }
    render(ctx, staticsEntitiesState, entitiesState);
    // uncomment to start game
    // window.requestAnimationFrame(gameLoop(ctx));
}

// Initialize canvas width and height
// Call gameLoop function
const initCanvas = (ctx) => {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    window.requestAnimationFrame(gameLoop(ctx));
};

// Resize game window on request
window.addEventListener('resize', () => {
    let canvas_width = document.body.clientWidth;
    canvas.width = canvas_width;
});

// Get canvas to be accessible in the entirety of this file
// Check if game functionnalites are supported by browser otherwise display error message
const canvas = document.getElementById('game-canvas');
if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    window.onload = initCanvas(ctx);
}
else {
    canvas.style.display = 'none';
    gameUnsupported();
}
