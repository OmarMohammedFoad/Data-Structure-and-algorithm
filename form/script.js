
var form = document.getElementById("form");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email")


    var search = location.search;

    var searchArr =search.substring(1,search.length).split("&");
    console.log(searchArr);
    var formArr = []
    for (let index = 0; index < searchArr.length; index++) {

        formArr[searchArr[index].split("=")[0]]= searchArr[index].split("=")[1];
        
    }
    
    console.log(searchArr);

    for (var key in formArr) {
        
        const element = document.getElementById(key);
        
        if (element) {
            element.innerHTML += ` ${formArr[key]}`; 
        }
    }








