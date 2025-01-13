
function radius() {
    var raduis = parseFloat(prompt("enter the raduis please"));


    if (isNaN(raduis) || raduis <= 0) {
        alert("please enter a valid positive number for the radius");

    } else {
        var area = Math.PI * Math.pow(raduis, 2);
        document.write('<h' + 1 + ' style="color:blue;">'+"the area of the circle with radius : " + raduis + "is : " + area+'</h' + 1 + '>');

    }
}


function sqrt() {
    var root = parseFloat(prompt("enter the the value to calculate its square root"));
    if (isNaN(root)) {
        alert("please enter a valid positive number for the radius");
    } else {
        var sqrt = Math.sqrt(root, 2);
        
        document.write('<h' + 1 + ' style="color:blue;">'+"the area of the circle with radius : " + root + "is : " + sqrt+'</h' + 1 + '>');

    }
}



function angleCos() {
    var angle = parseFloat(prompt("enter the the value to calculate its square angle"));
    if (isNaN(angle)) {
        alert("please enter a valid positive number for the radius");
    } else {
        var sqrt = Math.cos(angle).toFixed(2);
        document.write('<h' + 1 + ' style="color:blue;">'+"the area of the circle with radius : " + angle + "is : " + sqrt+'</h' + 1 + '>');

    }
}