import { playerState, playerTools } from "./player/player-state";
import { itemsState } from "./items/items-state";

export const entitiesTools = {
    readEntities: () => {
        console.log(entitiesState);
    },

    renderAllEntities: (ctx) => {
        const allTools =  [playerTools];
        allTools.forEach(element => {
            element.renderAll(ctx);
        });
    },

    playerTools: playerTools,
};

// regroup all entites in one object
export const entitiesState = Object.values({
    player: playerState,
    itemsState: itemsState,
});
