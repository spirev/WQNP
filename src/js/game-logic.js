import { staticsEntitiesState, staticsEntitiesTools } from "./entities-state/statics-entities/statics-entities-state";
import { entitiesState } from "./entities-state/entities/entities-state";

// instatiate elements needed at the start of the game, on first frame
export const initGame = () => {
    // create main ground
    staticsEntitiesTools.groundTools.addMainGround();
    staticsEntitiesTools.blockTools.addBlock(50, 100, 850, 830, 'red');
    // create player
};