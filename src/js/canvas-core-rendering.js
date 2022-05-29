"use strict";

import { changeErrorMessage, gameUnsupported } from "./outside-game/error-message";
import { initGame } from "./game-logic";
import { staticsEntitiesState, staticsEntitiesTools } from "./entities-state/statics-entities/statics-entities-state.js";
import { entitiesState, entitiesTools } from "./entities-state/entities/entities-state.js";
import { updatePlayerPos } from "./player-inputs";
import { Canvas } from "./canvas-layout";

const mainCanvas = new Canvas;

// Is game supported by browser ? get 2D context : error message
if (mainCanvas.htmlElement.getContext) {
    mainCanvas._context = mainCanvas._htmlElement.getContext('2d');
    window.onload = window.requestAnimationFrame(gameLoop);
}
else {
    mainCanvas.htmlElement.style.display = 'none';
    gameUnsupported();
}

//Render every object in statics and none-statics entites state
function render() {
    staticsEntitiesTools.renderAllStaticsEntities(mainCanvas._context);
    entitiesTools.renderAllEntities(mainCanvas._context);
};

// This function is call on every frame (60 times by seconde)
// Need to clear canvas on every frame
function gameLoop() {
    mainCanvas.clearCanvas(mainCanvas._context);
    // Launch entities first instatiation before first frame is render
    if (!mainCanvas.isFirstFrameRender) {
        initGame();
        mainCanvas.isFirstFrameRender = true;
    }
    render();

    // uncomment to start game
    window.requestAnimationFrame(gameLoop);
}

// Resize game window
window.addEventListener('resize', () => {
    let canvasWidth = document.body.clientWidth;
    mainCanvas.width = canvasWidth;
});
