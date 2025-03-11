let time = 0;
let interval = null;

function startTimer(){
    if (interval===null){
        interval = setInterval(() =>{
            if (time<30){
                time+=3;
                document.getElementById("timer").innerText= time + "s";

            } else{
                clearInterval(interval);
                interval = null;
            }
        }, 3000);
    }
}

function stopTimer(){
    clearInterval(interval);
    interval = null;
}

function resetTimer(){
    clearInterval(interval);
    interval = null;
    time = 0;
    document.getElementById("timer").innerText= "0s";
}

