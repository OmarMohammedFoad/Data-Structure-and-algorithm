import { createCookie, getAllcookies, hasCookie, clearCookies, deleteCookie } from "./JScookie.js";

function main(){
    var img=document.getElementById("gender-img");
    var name=document.getElementById("name");
    var message=document.getElementById("message");
    var cookies = getAllcookies();
    console.table(cookies);
    
    img.src = `./images/${(parseInt(cookies["gender"])+1)}.jpg`;
    name.innerText=(cookies["name"][0]).toUpperCase()+cookies["name"].slice(1);
    name.style.color=cookies["color"];
    message.innerHTML=`you have visited this website <span style="color:${cookies["color"]}">${cookies["visits"]}</span> times 🤗`
}

main();