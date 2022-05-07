import { groundState, groundTools } from "./ground-state";
import { blockState, blockTools } from "./block-state";

// regroup all statics-entites tools like add, delete, read, ...
export const staticsEntitiesTools = {
    readStaticsEntities: () => {
        console.log(staticsEntitiesState);
    },

    renderAllStaticsEntities: (ctx) => {
        const allTools =  [groundTools, blockTools];
        allTools.forEach(element => {
            element.renderAll(ctx);
        });
    },

    groundTools: groundTools,
    blockTools: blockTools,
};

// regroup all statics-entites in one array
export const staticsEntitiesState = Object.values({
    ground: groundState,
    block: blockState,
});