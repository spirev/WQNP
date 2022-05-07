import { Player } from "../../../entities-layout/entities/player/player-properties";
import { drawRectangle } from "../../../drawings/shapes/rectangle";

export const playerState = [];
export const playerTools = {
    addPlayer: (posX, posY, width, height, color) => {
        const newPlayer = new Player(posX, posY, width, height, color);
        playerState.push(newPlayer);
    },

    deletePlayer: (index) => {
        if (index < 0) {
            console.error(`can\t delete a player on index ${index}`);
            return;
        }
        playerState.splice(index, 1);
    },

    render: (ctx) => {
        drawRectangle(ctx, playerState[index].posX, playerState[index].posY, playerState[index].width, playerState[index].height, playerState[index].color);
    },

    renderAll: (ctx) => {
        playerState.forEach((element, index) => {
            drawRectangle(ctx, playerState[index].posX, playerState[index].posY, playerState[index].width, playerState[index].height, playerState[index].color);
        });
    },

    readPlayer: () => {
        console.log(playerState);
    },
}