
var form = document.getElementById("form");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var formArr = []

function displayCookies() {
    var cookie = document.cookie;
    var cookieArray = cookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var parts = cookieArray[i].split("=");
        formArr[parts[0].trim()] = parts[1];
    }

    
    return formArr
}

console.log(displayCookies());

for (var key in formArr) {
        
    const element = document.getElementById(key);

    if(key=='gender'){
        element.src = `${formArr[key]}`
    }


    if(key=='name'||key=='visits'){
    
            
        
        element.style = `color:${formArr['colors']}`
        element.style = `color:${formArr['colors']}`

    }

    
    
    
    

    if (element) {
        element.innerHTML += ` ${formArr[key]}`; 
    }
}