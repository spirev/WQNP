export class Ground {
    constructor(posX = 0, posY = 0, width = 200, height = 50, color = '#2f6324') {
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
            console.error('ground width can\'t be less than 0');
            return;
        }
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (value < 0) {
            console.error('ground height can\'t be less than 0');
            return;
        }
        this._height = value;
    };

    get color() {
        return this._color;
    }

    set color(value) {
        if (value.length < 3) {
            console.error('ground color length can\'t be less than 2 characteres');
            return;
        }
        this._color = value;
    }

    get color() {
        return this._color;
    }
}