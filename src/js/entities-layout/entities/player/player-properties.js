export class Player {
    constructor(posX = 500, posY = 800, width = 50, height = 80, color = 'lime') {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.color = color;
    };

    get posX() {
        return this._posX
    };

    set posX(value) {
        this._posX = value;
    };

    get posY() {
        return this._posY
    };

    set posY(value) {
        this._posY = value;
    };

    get width() {
        return this._width;
    }

    set width(value) {
        if (value < 0) {
            console.error('player width can\'t be a negative number');
            return;
        }
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (value < 0) {
            console.error('player height can\'t be a negative number');
            return;
        }
        this._height = value;
    };

    get color() {
        return this._color;
    }

    set color(value) {
        if (value.length < 3) {
            console.error('player color length can\'t be less than 2 characteres');
            return;
        }
        this._color = value;
    }

    get color() {
        return this._color;
    }
}