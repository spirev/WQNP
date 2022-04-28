import { groundState, groundTools } from "./ground-state";
import { blockState } from "./block-state";

// regroup all statics-entites tools like add, delete, read, ...
export const staticsEntitiesTools = {
    readStaticsEntities: () => {
        console.log(staticsEntitiesState);
    },
    groundTools: groundTools,
};

// regroup all statics-entites in one array
export const staticsEntitiesState = Object.values({
    ground: groundState,
    block: blockState,
});