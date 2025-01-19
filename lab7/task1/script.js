window.onload = function () {
    var form = document.getElementById("formData")
    var imagesSelector = document.querySelectorAll(".slecGender img");
    var formArr = [];
    var count = 0;
    var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email")

   form.onsubmit = function(e){
    e.preventDefault();
    var date = new Date();
    date.setMonth(date.getMonth() + 1);
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var color = document.getElementById("colors").value;

    addCookies("name", name, date);
    addCookies("age", age, date);
    addCookies("colors", color, date);

    form.submit();
    
   }

    imagesSelector[0].addEventListener("click", function () {
        var date = new Date();
        date.setMonth(date.getMonth() + 1);
        var imgPath = "./imgs/1.jpg";
        addCookies("gender", imgPath, date);
    });

    imagesSelector[1].addEventListener("click", function () {
        var date = new Date();
        date.setMonth(date.getMonth() + 1);
        var imgPath = "./imgs/2.jpg";
        addCookies("gender", imgPath, date);
    });

    function addCookies(key, value, expiryDate) {
        count++;
        if (expiryDate) {
            document.cookie = key + "=" + value + ";expires=" + expiryDate.toUTCString() + ";visits=" + count;
        } else {
            document.cookie = key + "=" + value + ";visits=" + count;
        }
    }






    function displayCookies() {
        var cookie = document.cookie;
        var cookieArray = cookie.split(';');

        for (var i = 0; i < cookieArray.length; i++) {
            var parts = cookieArray[i].split("=");
            formArr[parts[0].trim()] = parts[1];
        }

        
        return formArr
    }


    function addVisits() {
        var visitor = displayCookies();
        var visitCount = parseInt(visitor['visits']);



        if (isNaN(visitCount)) {
            visitCount = 1;
        } else {
            visitCount++;
        }

        var date = new Date();
        date.setMonth(date.getMonth() + 1);
        addCookies("visits", visitCount, date);
        console.log("Number of visits:", visitCount);
    }

    function clearCookies(){
        
        var cookie = document.cookie;
        var cookieArray = cookie.split(";");
        var date = new Date();
        date.setMonth(date.getMonth() -1);



        for (var i = 0; i < cookieArray.length; i++) {
            var parts = cookieArray[i].split("=");


            document.cookie = parts[0].trim()+"=;"+"expires="+date.toUTCString();
            
        }
        
    }

    addVisits()
    
}