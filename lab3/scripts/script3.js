var input = prompt("enter the Word Dude");

size = input.length-1;
var i=0;
var j=size;
var isPalidrome = true;

while (i<j){
    if (input[i]!=input[j]) {
        isPalidrome = false;
        break; 
    }
    i++;
    j--;
    
}

if(isPalidrome){
    
    document.write('<h'+1+'>' + " palindrome!!!!"+'</h'+1+'>')
}else{
    document.write('<h'+1+'>' + "Not palindrome!!!!"+'</h'+1+'>')
}