var arr = [];
var sum=0;
var divied;
var product=1;
numberOfNumbers=Number(prompt("enter the number of numbers"));
for (var i = 0; i < numberOfNumbers; i++) {
    inputPrompt = Number(prompt("enter the number "+i));
    arr.push(inputPrompt);
}

for (var i = 0; i < arr.length; i++) {
    sum+=arr[i];
}



for (var i = 0; i < arr.length; i++) {
    product*=arr[i];
}



divied= arr[0];
for (var i = 0; i < arr.length; i++) {
    if(arr[0]==0)
        {
            alert("you can not divide by 0");
            break;
        }else{

            divied /= arr[i];
        }
}


document.write('<h' + 1 + ' style="color:red;">' + "The sum will be = " + sum + '</h' + 1 + '>');
document.write('<h'+1+' style="color:red;">' + "the prod will be = "+product+'</h'+1+'>')
document.write('<h'+1+' style="color:red;">' + "the division will be = "+divied+'</h'+1+'>')
