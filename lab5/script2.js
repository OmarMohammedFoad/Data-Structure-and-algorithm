var arr = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eius dolores expedita omnis neque aliquam dolorem incidunt harum est repellendus, delectus ullam ab dicta perferendis minus numquam dolorum accusamus. Tempora.";
var doc;


function openWin(){
   var windo =  window.open("./typing.html","_blank",'width=1000, height=500');
   
   
   windo.onload= function(){
        var myWindow = windo.document.getElementById("paragraph");
        var count =0; 
        setInterval(function(){
            // console.log(arr[count++]);
            
            myWindow.innerHTML+= arr[count++];
          
       },100)
    }
    
}


document.getElementById("typing").onclick = openWin;