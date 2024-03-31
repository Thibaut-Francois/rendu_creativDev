const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(tempusFugit, 1000);
// JE REPLACE LE 0,0 AU CENTRE DU CANVAS

let isDay = true
const deg2rad = (deg) => deg * Math.PI / 180;


function romanNumb(nb, position, angle){

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

}
// CETTE FONCTION DESSINE TOUS LES CHIFFRES ROMAINS SUR LE CADRAN


function getCoord(ctx, radius){
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    //hour = 14
    // SI VOUS VOULEZ CHANGER L'HEURE, DECOMMENTEZ CETTE LIGNE ET MODIFIEZ L'HEURE

    let x, y

    let time = hour + minute/60 + second/3600;
    let angle = 3*Math.PI/2 - (time*Math.PI)/12

    x = (radius-100) * Math.cos(angle)
    y = (radius-100) * Math.sin(angle)

    if(hour < 18 && hour >= 6){

        isDay = true 

        ctx.beginPath();
        ctx.lineWidth = 8;
        ctx.lineCap = "round";
        ctx.moveTo(0,0);
        ctx.lineTo(x, y);
        ctx.strokeStyle = '#3d3d3d';
        ctx.stroke();
    }else{
        isDay = false
    }

    if(isDay){
        ctx.fillStyle = 'yellow';
        x=-x
        y=-y
    }else{
        ctx.fillStyle = 'white';
    }
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, deg2rad(360))
    ctx.fill();
    ctx.closePath();
    // LA LUNE ET LE SOLEIL SONT DESSINES PAR OPOSITION A L'OMBRE DES HEURES
}

function tempusFugit(){
// CETTE FONCTION DESSINE LE CADRAN ET APPELLE LES AUTRES FONCTIONS

    const nGraduation_ = 13
    ctx.strokeStyle = 'grey';
    test=0
    long=300

    if(isDay){
        ctx.fillStyle = '#f5eacb';
    }else{
        ctx.fillStyle = '#151459';
    }
    ctx.beginPath();
    ctx.rect(-400, -400, 800, 800);
    ctx.fill();
    ctx.closePath();

    for(let i=0; i<nGraduation_; i++){
            const angle_ = deg2rad(180) * i / nGraduation_ +test
            test=angle_/nGraduation_

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
            romanNumb(i+1, long, angle_)
            ctx.closePath()
        
            ctx.restore()
    }
    
    ctx.save()
    getCoord(ctx, radius)
    ctx.restore()
    // ON DESSINE ICI L'OMBRE ET L'ASTRE
    
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, deg2rad(360));
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    // ON DESSINE LE CENTRE DU CADRAN
}
