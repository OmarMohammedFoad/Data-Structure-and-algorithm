var w = screen.width;
var h = screen.height;
var flag = true;
var movingForward = true;
var id;

var myWindow;

function openWin() {
  if(!myWindow){
    myWindow = window.open('', '', 'width=400, height=200');

  }  
}


function moveForward() {
  var x = myWindow.screenX;
  var y = myWindow.screenY;
  if(movingForward){
 
  x+=5;
  y+=8
  // console.log("x",x);
  // console.log("y",y);
  // console.log("w",w);
  // console.log("h",h);
  // console.log("screen",screen.height);
  // console.log("screen",screen.width)

  if(x+400>w || y+200>h){
    movingForward = false;
  }
}
  else{
    x-=5;
    y-=5;
    if(x<0|| y<0){
      movingForward = true;
    }
  
  
 }

  

  myWindow.moveTo(x,y);
}



document.getElementById("btn").onclick = function() {
  if (flag == true) {
    openWin();
  id = setInterval(moveForward,40);
  flag = !flag;
  
    
  console.log("Clicked", flag);
} else {
  flag = !flag;
  
  
  
  clearInterval(id);
}

 
}
   