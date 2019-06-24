const bas = document.getElementById('basket');

const ctx = bas.getContext('2d');

ctx.strokeStyle = 'white'

ctx.lineWidth = 10;
ctx.strokeRect(0, 0, 728, 392);

ctx.beginPath();
ctx.lineWidth= 2;
ctx.moveTo(364, 0);
ctx.lineTo(364, 392);
ctx.moveTo(0, 30)
ctx.lineTo(30,30)
ctx.moveTo(0, 362)
ctx.lineTo(30, 362)
ctx.moveTo(728, 30)
ctx.lineTo(698,30)
ctx.moveTo(728, 362)
ctx.lineTo(698, 362)
ctx.stroke()

ctx.fillStyle = '#DE9751'
ctx.fillRect(5, 146, 150, 100);
ctx.fillRect(573, 146, 150, 100);

ctx.strokeRect(5, 146, 150, 100);
ctx.strokeRect(5, 126, 150, 140);

ctx.strokeRect(573, 146, 728, 100);
ctx.strokeRect(573, 126, 150, 140);

ctx.beginPath();
ctx.arc(156, 196, 40, 0, (Math.PI/180)*360);
ctx.stroke();

ctx.beginPath();
ctx.arc(364, 196, 40, 0, (Math.PI/180)*360);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(364, 0);
ctx.lineTo(364, 392);
ctx.moveTo(30, 176);
ctx.lineTo(30, 216);
ctx.moveTo(30, 196);
ctx.lineTo(40, 196)
ctx.arc(40, 196, 3, 0, 2*Math.PI)
ctx.moveTo(698, 176);
ctx.lineTo(698, 216);
ctx.stroke()
ctx.closePath()


ctx.beginPath();
ctx.moveTo(698, 196);
ctx.lineTo(688, 196)
ctx.arc(688, 196, 3, 0, 2*Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath()




ctx.lineWidth = 2;

ctx.beginPath();
ctx.arc(572, 196, 40, 0, (Math.PI/180)*360);
ctx.stroke();


ctx.beginPath();
ctx.arc(30, 196, 166, ((Math.PI/180)*270),(Math.PI/180)*90);
ctx.stroke();


ctx.beginPath();
ctx.arc(698, 196, 166, ((Math.PI/180)*90),(Math.PI/180)*270);
ctx.stroke();