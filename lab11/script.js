
let arrFilterd = [];
let arrILike = [];



let x=1;
let y=2;

[y,x] = [x,y];

console.log("x: ",x," ","y: ",y);

const arr = [1, 2, 3, 4, 5, 6];

function findMinAndMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return [min, max];
}

console.log(findMinAndMax(arr));

function displayArr(arr) {
  return [...arr];
}
console.log(displayArr(arr));

let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

 fruits.forEach((fruit)=>{
    

    if(typeof fruit == "string"){
        console.log(`${fruit} is a string`);
        
    }else{
        console.log(`not a string`);
    }


})





let checkIfaAExistAtFirst = fruits.some(fruits=> fruits.toLowerCase()[0] == 'a');

console.log(checkIfaAExistAtFirst);




arrFilterd = fruits.filter((fruit)=> fruit.toLowerCase().startsWith('a') || fruit.toLowerCase().startsWith("b") );


console.log(arrFilterd);

arrILike =  fruits.map((fruit)=> `I like ${fruit}`);

 arrILike.forEach((fruit)=>{
    console.log(fruit);
    
})






