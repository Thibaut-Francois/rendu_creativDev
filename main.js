const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(tempusFugit, 1000);

let ciel = ''


const deg2rad = (deg) => deg * Math.PI / 180;

//////////////////////////////////////////////////////////////////////////////

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
        ctx.moveTo(position+30, 0);
        ctx.lineTo(position+30, 20);

        ctx.moveTo(position+40, 0);
        ctx.lineTo(position+50, 20);
        ctx.lineTo(position+60, 0);

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
        ctx.moveTo(position+40, 0);
        ctx.lineTo(position+60, -20);
        ctx.moveTo(position+60, 0);
        ctx.lineTo(position+40, -20);

        ctx.moveTo(position+30, 0);
        ctx.lineTo(position+30, -20);

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

//////////////////////////////////////////////////////////////////////////////

/*
function timeToAngle(time){
    return (time*Math.PI/60+(Math.PI/2))%(Math.PI)+(Math.PI/2)
}

*/
function timeToAngleHours(time){
    return ((time*Math.PI/24)+(Math.PI/4))%(Math.PI)+(Math.PI/2)
}

function drawTime(ctx, radius){
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //hour
    //drawHand(ctx, timeToAngleHours(hour), radius*0.5, radius*0.07);
    //minute
    //drawHand(ctx, timeToAngle(minute), radius*0.8, radius*0.07);
    // second
    //drawHand(ctx, timeToAngle(second), radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length) {
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(-pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(pos);
}

//////////////////////////////////////////////////////////////////////////////

function GetCoord(ctx, radius){
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if(hour < 18 && hour >= 6){
        let time = hour + minute/60 + second/3600;

        let angle = 3*Math.PI/2 - (time*Math.PI)/12

        //console.log(angle)

        let x = (radius-100) * Math.cos(angle)
        let y = (radius-100) * Math.sin(angle)

        console.log(x, y)

        ctx.beginPath();    
        ctx.lineWidth = 4;
        ctx.lineCap = "round";
        ctx.moveTo(0,0);
        //ctx.rotate(-timeToAngleHours(hour));
        ctx.lineTo(x, y);
        ctx.stroke();
        //ctx.rotate(timeToAngleHours(hour));
    }else{

    }

    
}
//////////////////////////////////////////////////////////////////////////////



///-------------------------------------------------------------



function tempusFugit(){

    const nGraduation_ = 13
    ctx.strokeStyle = 'grey';
    test=0
    long=300

    ctx.fillStyle = 'aliceblue';
    ctx.beginPath();
    ctx.rect(-400, -400, 800, 800);
    ctx.fill();
    ctx.closePath();

    ///-----------------------------------------------------------

    for(let i=0; i<nGraduation_; i++){
        //    console.log(i)
            const angle_ = deg2rad(180) * i / nGraduation_ +test
            test=angle_/nGraduation_
        //    console.log(angle_)
            ctx.save()
            ctx.beginPath()
            ctx.translate(0, 0)
            ctx.rotate(angle_)
            ctx.moveTo(25, 0)
            ctx.lineTo(long, 0)
            ctx.lineWidth = 2;
            ctx.stroke()
        
            ctx.closePath()
        
            ctx.beginPath()
            chiffre(i+1, long, angle_)
            ctx.closePath()
        
            ctx.restore()
    }
    
    ///------------------------------------------------------------
    
    ctx.save()
    //drawTime(ctx, radius);
    GetCoord(ctx, radius)
    ctx.restore()
    
    ///-----------------------------------------------------------
    
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, deg2rad(360));
    ctx.fillStyle = 'black';
    ctx.fill();
    
    ctx.closePath();
}