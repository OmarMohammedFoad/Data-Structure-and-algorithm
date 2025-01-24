var outerBox = document.getElementById("outer-class");
var buttonStart = document.getElementById("button1");
var buttonStop  = document.getElementById('button2');
var id; 
buttonStart.addEventListener("click", function () {
    var imgLeft = document.getElementById("class1");
    var imgRight = document.getElementById("class2");
    var imgTop = document.getElementById("class3");

    var countLeft = parseInt(getComputedStyle(imgLeft).left);
    var countRight = parseInt(getComputedStyle(imgRight).left);
    var countTop = parseInt(getComputedStyle(imgTop).top);
    
    var flag = true;
   id =  setInterval(function () {
      if (flag) {
        countLeft++;
        countRight--;
        countTop--;
      }else 
      {
        countLeft--;
        countRight++;
        countTop++;

      }

  

        // how to move back
        if (countLeft >= outerBox.offsetWidth - imgLeft.offsetWidth) {
            flag = false;

            // countLeft *=-1;
        }
        else if (countLeft <= 0) {
            flag = true;
        }
            
       
        imgLeft.style.left = countLeft + "px";
        imgRight.style.left = countRight + "px";
        imgTop.style.top = countTop + "px";
    }, 10);
});



buttonStop.addEventListener("click",function(){
    clearInterval(id);
    flag = false;
})