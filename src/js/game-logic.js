import { staticsEntitiesState, staticsEntitiesTools } from "./entities-state/statics-entities/statics-entities-state";
import { entitiesState } from "./entities-state/entities/entities-state";

export const initGame = () => {
    // create ground
    let mainGround = staticsEntitiesTools.groundTools.addGround();
    console.log(mainGround);
    mainGround = {
        ...mainGround,
        color: 'green'
    };
    console.log(mainGround);

    // create player
};