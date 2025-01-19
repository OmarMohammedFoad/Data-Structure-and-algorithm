var  h = screen.height;
var  myWindow;
var flag=true;
var  id;

function openWin(){
    
        myWindow = window.open("./scroll.html","",'width=1000, height=500');
        myWindow.onload= function(){
            scroll();   
        }
        
}


function scroll(){
    
    var prev = 0;
   
    id = setInterval(function(){
        
        prev = myWindow.scrollY;
        myWindow.scrollBy(0,10);
        
        
        
        if(myWindow.scrollY == prev){
            myWindow.close();
        }
     
        
    },40);

    
}



document.getElementById("btnScroll").onclick = function(){
    openWin();

}
