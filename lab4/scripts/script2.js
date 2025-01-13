var arr = [];

var inputPrompt = Number(prompt('enter the number of elements'));

for (let i = 0; i < inputPrompt; i++) {
var number = Number(prompt('enter the number'+(i+1)));
arr.push(number)
    
}

document.write('<h' + 1 + ' style="color:red;">' + "the values you entered: "+'</h' + 1 + '>');

for (let i = 0; i < inputPrompt; i++) {
   document.write('<h' + 1 + ' style="color:blue;">' +arr[i]+'</h' + 1 + '>');        
    }

// it is as  same as the compare function in c/c++
 
function cmpasc(a,b) {
    if (a==b) {
        return 0;
    }else if(a>b){
        return 1;
    }else{
        return -1;
    }
    
}

function cmpdesc(b,a) {
    if (a==b) {
        return 0;
    }else if(a>b){
        return 1;
    }else{
        return -1;
    }
    
}

// function compare(a,b){
//     // if a-b = +ve it will be orderd before b
//     // if a-b = 0 won't chnage
//     // if a-b = -ve ordered after b 
//     return a-b;
// }

arr.sort(cmpdesc);



document.write('<h' + 1 + ' style="color:red;">' + "your values after descending : "+'</h' + 1 + '>');

for (var i = 0; i < arr.length; i++) {
document.write('<h' + 1 + ' style="color:blue;">' +arr[i]+'</h' + 1 + '>');
}


