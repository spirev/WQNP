"use strict";

import { changeErrorMessage, gameUnsupported } from "./outside-game/error-message";
import { initGame } from "./game-logic";
import { staticsEntitiesState, staticsEntitiesTools } from "./entities-state/statics-entities/statics-entities-state.js";
import { entitiesState, entitiesTools } from "./entities-state/entities/entities-state.js";
import { updatePlayerPos } from "./player-inputs";
import { Canvas } from "./canvas-layout";

//Render every object in statics and none-statics entites state
function render (ctx) {
    staticsEntitiesTools.readStaticsEntities();
    staticsEntitiesTools.renderAllStaticsEntities(ctx);
    entitiesTools.renderAllEntities(ctx);
};

// This function is call on every frame (60 times by seconde)
// Need to clear canvas on every frame
function gameLoop(ctx) {
    mainCanvas.clearCanvas(ctx);
    // Launch entities first instatiation before first frame is render
    if (!mainCanvas.isFirstFrameRender) {
        initGame();
        mainCanvas.isFirstFrameRender = true;
    }
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