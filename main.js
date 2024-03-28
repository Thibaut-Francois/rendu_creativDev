const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');



//////////////////////////////////////////////////////////////////////////////

const deg2rad = (deg) => deg * Math.PI / 180;

ctx.beginPath();
ctx.arc(100, 300, 50, 0, deg2rad(180));
ctx.fillStyle = 'lightblue';
ctx.fill();

ctx.closePath();

///////////////////////////////////////////////////////////////////////////

ctx.beginPath();
ctx.strokeStyle = 'lightcoral';
ctx.moveTo(200, 350);
ctx.lineTo(300, 350);
ctx.lineTo(400, 350);
ctx.lineTo(400, 400);
ctx.stroke();

ctx.closePath();

////////////////////////////////////////////////////////////////////////////

function chiffre(nb, position){
    ctx.save()
    ctx.beginPath();
    ctx.arc(position + 30, 0, 10, 0, deg2rad(360));
    ctx.fillStyle = 'lightblue';
    ctx.fill();

    ctx.closePath();
    ctx.restore()
}

///------------------------

const nGraduation_ = 13
ctx.strokeStyle = 'grey';
test=0
long=200

for(let i=0; i<nGraduation_; i++){
//    console.log(i)
    const angle_ = deg2rad(180) * i / nGraduation_ +test
    test=angle_/nGraduation_
    console.log(angle_)
    ctx.save()
    ctx.beginPath()
    ctx.translate(500, 500)
    ctx.rotate(angle_)
    ctx.moveTo(0, 0)
    ctx.lineTo(long, 0)
    ctx.stroke()

    chiffre(0, long)
    
    ctx.closePath()
    ctx.restore()
}

///////////////////////////////////////////////////////////////////////////

ctx.fillStyle = 'red';
ctx.strokeStyle = 'greenyellow';
ctx.beginPath();
ctx.rect(300, 200, 100, 100);
ctx.fill();
ctx.stroke();

ctx.closePath();