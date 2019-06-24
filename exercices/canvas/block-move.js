const canva = document.getElementById('block');

const ctx = canva.getContext('2d');

class Figure{
    constructor(x, y, speedX, color) {
        this.x = x;
        this.y = y;
        this.size = 50;
        this.color = color;
        this.speedX = speedX;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        this.x += this.speedX;
        this.size += this.speedX;
    }
}

// let x =0;
// let y =0;
// ctx.fillStyle = 'red'

// function draw(){
//     ctx.fillRect(x, y, 50, 50)
//     x+= 1;
//     y+= 1;
//     if(y === 350){
//         for(let i = 0; i < 350; i += 1);
//             y -= y;
//     }
//     if(x === 650){
//         for(let i = 0; i < 650; i += 1);
//             x -= x;
//     }
// }

// function clear(){
//     ctx.clearRect(0, 0, canva.width, canva.height)
// }

// function animate(){
//     clear();
//     draw();
//     window.requestAnimationFrame(animate);
// }

// animate()