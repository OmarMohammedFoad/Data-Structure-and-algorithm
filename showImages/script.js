
onload = function(){
var prev = document.getElementById("prev");
var nxt = document.getElementById("nxt");
var stopShow = document.getElementById("stop");
var slideShow = document.getElementById("slideShow");
var id;
var img = document.getElementById("img");
    var count=0;
    var imgs = [

        "/showImages/img/1.jpg",
        "/showImages/img/2.jpg",
        "/showImages/img/3.jpg",
        "/showImages/img/4.jpg",
        "/showImages/img/5.jpg",
        "/showImages/img/6.jpg",
        
    ];


var next = function(){

    if(count<imgs.length-1)
        {
            console.log(count,imgs[count]);

            count++;
            img.src = imgs[count];
        
      }
    // imgs[count]
    

} 


var prv = function(){
    
    if(count>0)
        {
            console.log(count,imgs[count]);
            count--;
            img.src = imgs[count];
        
      }
    // imgs[count]
    

}

var show = function(){
    // var count=0;
    id = setInterval(function(){
        img.src = imgs[count];
        count++;
        

        
        
        if(count == imgs.length-1){
            count=0;
        }
    },1000);
}

var stop = function(){
    clearInterval(id);
}


nxt.onclick = next;
prev.onclick = prv;
slideShow.onclick = show
stopShow.onclick = stop;


}