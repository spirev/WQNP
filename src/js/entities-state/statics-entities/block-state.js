import { Block } from "../../entities-layout/statics-entites/block";
import { drawRectangle } from "../../drawings/shapes/rectangle";

export const blockState = [];
export const blockTools = {
    addBlock: (width = 50, height = 100, posX = 200, posY = 400, color = 'lime') => {
        const newBlock = new Block(posX, posY, width, height, color);
        blockState.push(newBlock);
    },
    
    deleteBlock: (index) => {
        if (index > -1) blockState.splice(index, 1);
    },

    render: (ctx, index) => {
        drawRectangle(ctx, blockState[index].posX, blockState[index].posY, blockState[index].width, blockState[index].height, blockState[index].color);
    },
    
    renderAll: (ctx) => {
        blockState.forEach( (Element, index) => {            
            drawRectangle(ctx, blockState[index].posX, blockState[index].posY, blockState[index].width, blockState[index].height, blockState[index].color);
        })
    },

    readBlock: () => {
        console.log(blockState);
    },
};
