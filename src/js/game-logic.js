import { staticsEntitiesState, staticsEntitiesTools } from "./entities-state/statics-entities/statics-entities-state";
import { entitiesState, entitiesTools } from "./entities-state/entities/entities-state";

// instatiate elements needed at the start of the game, on first frame
export const initGame = () => {
    // create main ground
    staticsEntitiesTools.groundTools.addMainGround();
    staticsEntitiesTools.blockTools.addBlock(850, 830, 50, 100);
    // create player
    entitiesTools.playerTools.addPlayer();
};