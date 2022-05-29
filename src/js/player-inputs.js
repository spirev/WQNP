import { PlayerInputs } from "./entities-layout/entities/player/player-options";
import { playerState } from "./entities-state/entities/player/player-state";

const playerInputs = new PlayerInputs;
document.addEventListener('keydown', updatePlayerKeyInputs);
document.addEventListener('click', updatePlayerLeftMouseInputs);
window.addEventListener('contextmenu', updatePlayerRightMouseInputs);

function updatePlayerKeyInputs(key) {
    const player = playerState[0];
    const keyValue = key.key;
    switch (keyValue) {
        case playerInputs._left:
            playerInputs._isLeft = true;
            break;
        case playerInputs._right:
            playerInputs._isRight = true;
            break;
        case playerInputs._jump:
            playerInputs._isJump = true;
            break;
        case playerInputs._cap1:
            playerInputs._isCap1 = true;
            break;
        case playerInputs._cap2:
            playerInputs._isCap2 = true;
            break;
        case playerInputs._cap3:
            playerInputs._isCap3 = true;
            break;
        default:
    }
    updatePlayerPos();
};

function updatePlayerLeftMouseInputs() {
    playerInputs._isFire1 = true;
};

function updatePlayerRightMouseInputs(e) {
    e.preventDefault();
    playerInputs._isFire2 = true;
};

export function updatePlayerPos() {
    const player = playerState[0];
    if (playerInputs._isLeft ) player._posX--;
    if (playerInputs._isRight) player._posX++;
    if (playerInputs._isJump) player._posY--;
    playerInputs.resetIsInput();
}