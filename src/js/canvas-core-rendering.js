"use strict";

import { changeErrorMessage, gameUnsupported } from "./outside-game/error-message";
import { initGame } from "./game-logic";
import { staticsEntitiesState, staticsEntitiesTools } from "./entities-state/statics-entities/statics-entities-state.js";
import { entitiesState, entitiesTools } from "./entities-state/entities/entities-state.js";
import { Canvas } from "./canvas-layout";

// RENDERING
function render (ctx) {
    ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    // launch render function on every object in statics and none-statics entites
    staticsEntitiesTools.renderAllStaticsEntities(ctx);
    entitiesTools.renderAllEntities(ctx);

};

// Function that is call on every frame (60 times by seconde)
function gameLoop(ctx) {
    /**
     * TODO :
     * 
     * - Take player inputs
     * - Change player pos from inputs
     * - pass info to render function below
     */
    if (!mainCanvas.isInit) {
        console.log('frame 0');
        initGame();
        mainCanvas.isFirstFrameRender = true;
    }
    console.log('frame 1');
    render(ctx);
    // uncomment to start game
    // window.requestAnimationFrame(gameLoop(ctx));
}

// Resize game window
window.addEventListener('resize', () => {
    let canvasWidth = document.body.clientWidth;
    mainCanvas.width = canvasWidth;
});

// START
const mainCanvas = new Canvas;

// Is game supported by browser ? get 2D context : error message
if (mainCanvas.htmlElement.getContext) {
    const ctx = mainCanvas.htmlElement.getContext('2d');
    window.onload = window.requestAnimationFrame(gameLoop(ctx));
}
else {
    mainCanvas.htmlElement.style.display = 'none';
    gameUnsupported();
}