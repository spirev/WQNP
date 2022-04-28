export const drawRectangle = (ctx, color, x, y, width, height) => {
    if (color) ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
};
 