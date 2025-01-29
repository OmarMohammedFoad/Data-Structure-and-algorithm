import { createCookie, getAllcookies, hasCookie, clearCookies } from "./JScookie.js";

function main() {
    var form=document.getElementsByTagName("form")[0];
    form.onsubmit=function(e){
        e.preventDefault();

        var inputs = document.getElementsByTagName("input");
        console.log(inputs)
        for (var i = 0; i < inputs.length-1; i++) {
            var [key,value]=[inputs[i].name,inputs[i].value]
            if(inputs[i].type === "radio"){
                if (inputs[i].checked){
                    createCookie(key,value,1);
                }
            }else{
                createCookie(key, value, 1);
            }
        }

        if(hasCookie("visits")){
            var cookies = getAllcookies()
            createCookie("visits",++cookies["visits"],1)
        }else{
            createCookie("visits", 1, 1)
        }
        console.log(getAllcookies())
        location.href="index.html"
    }
}

main();