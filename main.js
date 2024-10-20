
let secounds = 0;

let tens = 0;

let outputSecounds = document.getElementById('second');

let outputTens = document.getElementById('tens');

let buttonStart = document.getElementById('btn-start');

let buttonStops = document.getElementById('btn-stop');

let buttonReset = document.getElementById('btn-reset');

let Interval;

buttonStart.addEventListener('click', () =>{
    clearInterval(Interval);

    Interval = setInterval(startTime, 10);

});

buttonStops.addEventListener('click', () =>{

    clearInterval(Interval);
});

buttonReset.addEventListener('click', () =>{

    clearInterval(Interval);

    tens = "00";

    secounds = "00";

    outputSecounds.innerHTML = secounds;

    outputTens.innerHTML = tens;
});

function startTime(){

    tens++;
    
    if(tens <= 9){

        outputTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        outputTens.innerHTML = tens;
    }

    if(tens > 99){

        secounds++;

        outputSecounds.innerHTML = "0" + secounds;

        tens = 0;

        outputTens.innerHTML = "0" + tens;
    }

    if(secounds > 9){

        outputSecounds.innerHTML = secounds;

    }
}