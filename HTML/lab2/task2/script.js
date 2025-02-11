var lname = document.getElementById("name");
var age = document.getElementById("age");
var visits = document.getElementById("visits");
var gender = document.getElementById("gender");
var info = document.getElementById("info");

function getAllStorge() {
  return localStorage;
}

var cookies = getAllStorge();
console.table(cookies);

lname.innerHTML += cookies.getItem("name");
age.innerHTML += cookies.getItem("age");
visits.innerHTML += cookies.getItem("visitCount");

if (cookies.getItem("selectedImage")) {
  gender.src = cookies.getItem("selectedImage");
}

info.style.color = cookies.getItem("colors");
