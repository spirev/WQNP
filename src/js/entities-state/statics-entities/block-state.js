import { block } from "../../entities-layout/statics-entites/block";

export const blockTools = {
    addBlock: () => {
        groundState.push(block);
    },
    
    deleteBlock: (index) => {
        if (index > -1) blockState.splice(index, 1);
    },

    readBlock: () => {
        console.log(blockState);
    },
};

export const blockState = [];