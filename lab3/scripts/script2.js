var sum=0;
var input;
while (sum<100) 
{
    input = parseInt(prompt("enter the number please or enter 0 to exist"));
    console.log(input);
    sum+=input;
   
    if (!isNaN(input)) {
        break;
    }
    
    if(isFinite(input)){
        alert("please enter a valid input which is number");
        continue;
    }
    document.write('<h'+1+'>' + "this current number"+sum+ '</h'+1+'>')

}


document.write('<h'+1+'>' + "this final number"+sum+ '</h'+1+'>')

