export const ground = {
    posX: 0,
    posY: 0,
    width: 200,
    height: 50,
    color: 'black',
    
    setPosX: (newPosX) => {
        this.posX = newPosX;
    },
    getPosX: () => {
        return this.posX;
    },

    setPosY: (newPosY) => {
        this.posY = newPosY;
    },
    getPosY: () => {
        return this.posY;
    },

    setWidth: (newWidth) => {
        this.width = newWidth;
    },
    getWidth: () => {
        return this.width;
    },
 
    setHeight: (newHeight) => {
        this.height = newHeight;
    },
    getHeight: () => {
        return this.height;
    },
    
    setColor: (newColor) => {
        this.color = newColor;
    },
    getColor: () => {
        return this.color;
    },


};