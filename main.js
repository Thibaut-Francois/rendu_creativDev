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
ctx.moveTo(400, 150);
ctx.lineTo(500, 150);
ctx.lineTo(600, 150);
ctx.lineTo(600, 200);
ctx.stroke();

ctx.closePath();

////////////////////////////////////////////////////////////////////////////

function chiffre(nb, position, angle){

    if(nb==1){                          // 1
        ctx.strokeStyle = 'lightcoral';
        ctx.moveTo(position+30, 0);
        ctx.lineTo(position+40, 20);
        ctx.lineTo(position+50, 0);

        ctx.moveTo(position+60, 0);
        ctx.lineTo(position+60, 20);
        ctx.stroke();

    }else if(nb==2){                    // 2
        ctx.strokeStyle = 'lightcoral';
        ctx.moveTo(position+30, 0);
        ctx.lineTo(position+40, 20);
        ctx.lineTo(position+50, 0);

        ctx.stroke();

    }else if(nb==3){                          // 3
        ctx.strokeStyle = 'lightcoral';
        ctx.moveTo(position+60, 0);
        ctx.lineTo(position+60, 20);

        ctx.moveTo(position+30, 0);
        ctx.lineTo(position+40, 20);
        ctx.lineTo(position+50, 0);

        ctx.stroke();

    }else if(nb==4){                          // 4
        ctx.strokeStyle = 'lightcoral';
        ctx.moveTo(position+30, 0);
        ctx.lineTo(position+30, 20);

        ctx.moveTo(position+40, 0);
        ctx.lineTo(position+40, 20);
        
        ctx.moveTo(position+50, 0);
        ctx.lineTo(position+50, 20);

        ctx.stroke();

    }else if(nb==5){                          // 5
        ctx.strokeStyle = 'lightcoral';
        ctx.moveTo(position+30, 0);
        ctx.lineTo(position+30, 20);

        ctx.moveTo(position+40, 0);
        ctx.lineTo(position+40, 20);

        ctx.stroke()

    }else if(nb==6){                          // 6
        ctx.strokeStyle = 'lightcoral';
        ctx.moveTo(position+30, 0);
        ctx.lineTo(position+30, 20);

        ctx.stroke();

    }else if(nb==7){                        // 7
        ctx.strokeStyle = 'lightcoral';
        ctx.moveTo(position+30, 0);
        ctx.lineTo(position+50, -20);
        ctx.moveTo(position+50, 0);
        ctx.lineTo(position+30, -20);

        ctx.moveTo(position+60, 0);
        ctx.lineTo(position+60, -20);

        ctx.moveTo(position+70, 0);
        ctx.lineTo(position+70, -20);

        ctx.stroke();

    }else if(nb==8){                          // 8
        ctx.strokeStyle = 'lightcoral';
        ctx.moveTo(position+50, 0);
        ctx.lineTo(position+70, -20);
        ctx.moveTo(position+70, 0);
        ctx.lineTo(position+50, -20);

        ctx.moveTo(position+30, 0);
        ctx.lineTo(position+30, -20);

        ctx.moveTo(position+40, 0);
        ctx.lineTo(position+40, -20);

        ctx.stroke();
        
    }else if(nb==9){                          // 9
        ctx.strokeStyle = 'lightcoral';
        ctx.moveTo(position+30, 0);
        ctx.lineTo(position+50, -20);
        ctx.moveTo(position+50, 0);
        ctx.lineTo(position+30, -20);

        ctx.stroke();
        
    }else if(nb==10){                          // 10
        ctx.strokeStyle = 'lightcoral';
        ctx.moveTo(position+30, 0);
        ctx.lineTo(position+50, -20);
        ctx.moveTo(position+50, 0);
        ctx.lineTo(position+30, -20);

        ctx.moveTo(position+60, 0);
        ctx.lineTo(position+60, -20);

        ctx.stroke();
        
    }else if(nb==11){                          // 11
        ctx.strokeStyle = 'lightcoral';
        ctx.moveTo(position+60, 0);
        ctx.lineTo(position+70, -20);
        ctx.lineTo(position+80, 0);

        ctx.moveTo(position+30, 0);
        ctx.lineTo(position+30, -20);

        ctx.moveTo(position+40, 0);
        ctx.lineTo(position+40, -20);

        ctx.moveTo(position+50, 0);
        ctx.lineTo(position+50, -20);

        ctx.stroke();
        
        
    }else if(nb==12){                          // 12
        ctx.strokeStyle = 'lightcoral';
        ctx.moveTo(position+50, 0);
        ctx.lineTo(position+60, -20);
        ctx.lineTo(position+70, 0);

        ctx.moveTo(position+30, 0);
        ctx.lineTo(position+30, -20);

        ctx.moveTo(position+40, 0);
        ctx.lineTo(position+40, -20);

        ctx.stroke();
        
    }else if(nb==13){                          // 13
        ctx.strokeStyle = 'lightcoral';
        ctx.moveTo(position+40, 0);
        ctx.lineTo(position+50, -20);
        ctx.lineTo(position+60, 0);

        ctx.moveTo(position+30, 0);
        ctx.lineTo(position+30, -20);

        ctx.stroke();
        
    }

    // ctx.save()
    // ctx.beginPath();
    // ctx.arc(position + 30, 0, 10, 0, deg2rad(360));
    // ctx.fillStyle = 'lightblue';
    // ctx.fill();

    // ctx.closePath();
    // ctx.restore()
}

///------------------------

const nGraduation_ = 13
ctx.strokeStyle = 'grey';
test=0
long=300

for(let i=0; i<nGraduation_; i++){
//    console.log(i)
    const angle_ = deg2rad(180) * i / nGraduation_ +test
    test=angle_/nGraduation_
    console.log(angle_)
    ctx.save()
    ctx.beginPath()
    ctx.translate(400, 400)
    ctx.rotate(angle_)
    ctx.moveTo(25, 0)
    ctx.lineTo(long, 0)
    ctx.stroke()



    ctx.closePath()


    ctx.beginPath()
    chiffre(i+1, long, angle_)
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