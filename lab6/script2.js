window.onload = function(){
    var outMarbela = document.getElementsByClassName("out-side");

var id; 
var move = function () {
    var img1 = "./img/WhatsApp Image 2025-01-18 at 19.28.03 (1).jpeg";
    var img2 = "./img/WhatsApp Image 2025-01-18 at 19.28.03 (2).jpeg";
var i=0,j=1;
    id = setInterval(function() {
        outMarbela[i].src = img1;
        outMarbela[j].src =img2;
        
            i++;
            j++;
            if (i >= outMarbela.length) {
                i = 0;
            }
            if (j >= outMarbela.length) {
                j = 0;
            }

    }, 1000);
}

move()
var stop = function (){
        
    clearInterval(id);
}
for (let i = 0; i < outMarbela.length; i++) {
    outMarbela[i].onmouseenter = stop;
    outMarbela[i].onmouseleave = move;    
     

}


//     inMarbela[0].onmouseenter = stop;
//     inMarbela[0].onmouseleave = move;    

}