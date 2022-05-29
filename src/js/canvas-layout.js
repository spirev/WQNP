export class Canvas {
    constructor() {
        this.width = document.body.clientWidth;
        this.height = document.body.clientHeight;
        this.htmlElement = document.getElementById('game-canvas');
        this.isFirstFrameRender = false;
    }

    get width() {
        return this._width;
    };

    set width(value) {
        if (value < 0) {
            console.error('canvas width can\'t be a negative number');
            return;
        }
        this._width = value;
    };
    
    get height() {
        return this._height;
    };
    
    set height(value) {
        if (value < 0) {
            console.error('canvas height can\'t be a negative number');
            return;
        }
        this._height = value;
    };

    get htmlElement() {
        return this._htmlElement;
    };

    set htmlElement(value) {
        this._htmlElement = value;
        this._htmlElement.width = this._width;
        this._htmlElement.height = this._height;
    };

    clearCanvas(ctx) {
        ctx.clearRect(0, 0, this._width, this._height);
    }
}