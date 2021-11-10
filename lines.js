var dict = {};

function dothing(){
    today = new Date();
    time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    if(textIn.value in dict){
        dict[textIn.value][1] = time;
    }
    else{
        dict[textIn.value] = [time,0];
    }
    printthing();
}

function printthing(){
    totout = "";
    for(i in dict){
        totout += i+";"+String(dict[i]) + "____";
    }
    out.textContent = totout;
}

textIn = document.getElementById("the text")
button = document.getElementById("the button")
endbutton = document.getElementById("complete")
out = document.getElementById("out")

button.onclick = dothing;
endbutton.onclick = printthing;
textIn.addEventListener('submit',dothing);
