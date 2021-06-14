var load = document.getElementById("load")
var score = document.getElementById("score")
let sco = 0 
load.addEventListener("click",function(){
    pictslist = [
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',]
    function image(){
        alera = Math.floor(Math.random() * pictslist.length);
        myimg= pictslist[alera]
        if(myimg=="1.png"){
            sco=0
            score.innerHTML = "0"
        }
        else if (myimg=="2.png"){
            sco+=2
            score.innerHTML = sco
        }
        else if (myimg=="3.png"){
            sco+=3
            score.innerHTML = sco
        }
        else if (myimg=="4.png"){
            sco+=4
            score.innerHTML = sco
        }
        else if (myimg=="5.png"){
            sco+=5
            score.innerHTML = sco
        }
        else if (myimg=="6.png"){
            sco+=6
            score.innerHTML = sco
        }


        document.getElementById('picts').src = `/static/images/${myimg}`
    
      }
    image()
})
