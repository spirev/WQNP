import { ground } from "../../entities-layout/statics-entites/ground";
import { drawRectangle } from "../../drawings/shapes/rectangle";

export const groundState = [];
export const groundTools = {
    addGround: (width = 200, height = 50, posX = 100, posY = 100, color = 'red') => {
        const newGround = Object.create(ground);
        newGround.width = width;
        newGround.height = height;
        newGround.posX = posX;
        newGround.posY = posY;
        newGround.color = color;
        groundState.push(newGround);
    },
    
    addMainGround: () => {
        let mainGround = Object.create(ground);
        // mainGround.width = 2000;
        // mainGround.height = 130;
        // mainGround.posY = 880;
        // mainGround.color = 'teal';
        mainGround.setWidth(2000);
        mainGround.setHeight(130);
        mainGround.setPosY(880);
        mainGround.setColor('teal');
        groundState.push(mainGround);
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

