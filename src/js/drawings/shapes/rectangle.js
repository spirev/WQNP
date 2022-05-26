export const drawRectangle = (ctx, x, y, width, height, color) => {
    if (color) ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
};
 