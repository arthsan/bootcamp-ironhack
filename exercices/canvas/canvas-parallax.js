const canvas = document.getElementById('rect')
const ctx = canvas.getContext('2d')

const img = new Image()
img.src='https://st.depositphotos.com/2873617/4715/v/950/depositphotos_47157615-stock-illustration-infinity-background-vector-illustration.jpg'


img.onload = function() {
    ctx.drawImage(img, 0, 0, 800, 500)
    ctx.fillStyle = 'grey';
    ctx.fillRect(200,130,120,120)
    ctx.fillRect(130, 250, 50, 50);
}
