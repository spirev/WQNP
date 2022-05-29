export class PlayerInputs {
    constructor() {
        this.left = 'q';
        this.right = 'd';
        this.jump = ' ';
        this.fire1 = 'LClick';
        this.fire2 = 'RClick';
        this.cap1 = 'a';
        this.cap2 = 'e';
        this.cap3 = 'r';
        
        this.isLeft = false;
        this.isRight = false;
        this.isJump = false;
        this.isFire1 = false;
        this.isFire2 = false;
        this.isCap1 = false;
        this.isCap2 = false;
        this.isCap3 = false;
    }

    resetIsInput() {
        this._isLeft = false;
        this._isRight = false;
        this._isJump = false;
    }

    getFrameInputs() {
        return {
            Left: this._isLeft,
            right: this._isRight,
            jump: this._isJump,
            fire1: this._isFire1,
            fire2: this._isFire2,
            cap1: this._isCap1,
            cap2: this._isCap2,
            cap3: this._isCap3,
        }
    }
    
    getOptiondInputs() {
        return {
            Left: this._left,
            right: this._right,
            jump: this._jump,
            fire1: this._fire1,
            fire2: this._fire2,
            cap1: this._cap1,
            cap2: this._cap2,
            cap3: this._cap3,
        }    
    }

    set left(value) {
        this._left = value;
    };

    get left() {
        return this._left;
    };

    set right(value) {
        this._right = value;
    };

    get right() {
        return this._right;
    };

    set jump(value) {
        this._jump = value;
    };

    get jump() {
        return this._jump;
    }

    set fire1(value) {
        this._fire1 = value;
    };

    get fire1() {
        return this._fire1;
    };

    set fire2(value) {
        this._fire2 = value;
    };

    get fire2() {
        return this._fire2;
    };

    set cap1(value) {
        this._cap1 = value;
    };

    get cap1() {
        return this._cap1;
    };

    set cap2(value) {
        this._cap2 = value;
    };

    get cap2() {
        return this._cap2;
    };

    set cap3(value) {
        this._cap3 = value;
    };

    get cap3() {
        return this._cap3;
    };

    set isLeft(value) {
        this._isLeft = value;
    };

    get isLeft() {
        return this._isLeft;
    };

    set isRight(value) {
        this._isRight = value;
    };

    get isRight() {
        return this._isRight;
    };

    set isJump(value) {
        this._isJump = value;
    };

    get isJump() {
        return this._isJump;
    }

    set isFire1(value) {
        this._isFire1 = value;
    };

    get isFire1() {
        return this._isFire1;
    };

    set isFire2(value) {
        this._isFire2 = value;
    };

    get isFire2() {
        return this._isFire2;
    };

    set isCap1(value) {
        this._isCap1 = value;
    };

    get isCap1() {
        return this._isCap1;
    };

    set isCap2(value) {
        this._isCap2 = value;
    };

    get isCap2() {
        return this._isCap2;
    };

    set isCap3(value) {
        this._isCap3 = value;
    };

    get isCap3() {
        return this._isCap3;
    };
}