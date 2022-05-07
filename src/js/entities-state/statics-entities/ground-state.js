import { Ground } from "../../entities-layout/statics-entites/ground";
import { drawRectangle } from "../../drawings/shapes/rectangle";

export const groundState = [];
export const groundTools = {
    addGround: (width = 200, height = 50, posX = 100, posY = 100, color = 'red') => {
        const newGround = new Ground(posX, posY, width, height, color);
        groundState.push(newGround);
    },

    addMainGround: () => {
        let mainGround = new Ground(0, 930, 2000, 120, '#541717');
        groundState.push(mainGround);
    },

    deleteGround: (index) => {
        if (index > -1) groundState.splice(index, 1);
    },

    render: (ctx, index) => {
        drawRectangle(ctx, groundState[index].posX, groundState[index].posY, groundState[index].width, groundState[index].height, groundState[index].color);
    },
    
    renderAll: (ctx) => {
        groundState.forEach( (element, index) => {
            drawRectangle(ctx, groundState[index].posX, groundState[index].posY, groundState[index].width, groundState[index].height, groundState[index].color);
        });
    },

    readGround: () => {
        console.log(groundState);
    },
};

