window.onload = function(){
    var outMarbela = document.getElementsByClassName("out-side");
var inMarbela = document.getElementsByClassName("in-side");

var id; 

var move = function () {
    id = setInterval(function(){
        var temp = inMarbela[0].src;
        inMarbela[0].src = outMarbela[0].src;
        for (var i = 0; i < outMarbela.length; i++) {
            outMarbela[i].src = temp;
            // inMarbela[0].src = "img/WhatsApp Image 2025-01-18 at 19.28.03 (2).jpeg"            
        }
    },1000);
}
var stop = function (){
        
    clearInterval(id);
}
for (let i = 0; i < outMarbela.length; i++) {
    outMarbela[i].onmouseenter = stop;
    outMarbela[i].onmouseleave = move;    
     

}


    inMarbela[0].onmouseenter = stop;
    inMarbela[0].onmouseleave = move;    

}