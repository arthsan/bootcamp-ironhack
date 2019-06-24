const myCanvas = document.getElementById('my-vancas');

const ctx = myCanvas.getContext('2d')

ctx.fillStyle = 'yellow';

ctx.beginPath();
ctx.moveTo(450, 50);
ctx.lineTo(850 , 250);
ctx.lineTo(450, 450);
ctx.lineTo(50, 250);
ctx.fill();
ctx.closePath()

ctx.fillStyle ='blue';

ctx.beginPath();
ctx.arc(450, 250, 135, 0, (Math.PI/180)*360);
ctx.fill();
ctx.closeStroke();