import { ground } from "../../entities-layout/statics-entites/ground";
import { drawRectangle } from "../../drawings/shapes/rectangle";

export const groundState = [];
export const groundTools = {
    addGround: () => {
        const newGround = Object.create(ground);
        groundState.push(newGround);
        return newGround;
    },
    
    deleteGround: (index) => {
        if (index > -1) groundState.splice(index, 1);
    },

    render: (ctx, index) => {
        drawRectangle(ctx, groundState[index].color, groundState[index].posX, groundState[index].posY, groundState[index].width, groundState[index].height);
    },

    readGround: () => {
        console.log(groundState);
    },
};

