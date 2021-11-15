var dict = {};
var printout = true;

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
function swapPrint(){
    printout = !printout;
    printthing();
}

function printthing(){
    if(printout){
        totout = "";
        for(i in dict){
            totout += i+";"+String(dict[i]) + "____";
        }
        out.textContent = totout;
    }
}

textIn = document.getElementById("the text")
button = document.getElementById("the button")
endbutton = document.getElementById("complete")
out = document.getElementById("out")

button.onclick = dothing;
endbutton.onclick = swapPrint;
textIn.addEventListener('submit',dothing);

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    if(name == "Enter"){
        dothing();
    }
  }, false);
