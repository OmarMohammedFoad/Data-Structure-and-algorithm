console.log("    scope   ");




/****
 * 
 * 
 * this is a powerful feature that the function can remember 
 * the variable from its original scope even if it's executed 
 * that scope 
 * 
 * 
 * 
 * 
 * 
 * 
 */
// function outer(){
//     let x=10;
//     function inner(){
//     console.log(x);
    
//     }
//  return inner
// }

// var myfunc = outer();
// myfunc();

/****
 * 
 * const myFunc = outer();
myFunc(); // Logs 10, even though `outer` has finished running
 * 
 */


/***
 *  How javascript proccess code?
 * 1- the javascript code is known as interpreted langauge 
 * which means that the code is executed line by line
 * but it's now entirely true
 * 
 * 1-Parsing/Compilation: Before running the code, JavaScript analyzes it to understand the structure, including scopes and variables.

    Execution: After parsing, the code is executed.

This means that the rules of scope are determined before the code runs, and they don’t change during execution.


 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */



// var arr = [1,2,3,4,5];

// // call makes immediate execution 
// // call send parameter direct
// var str = "this is javascript";
// console.log([].join.call(str,"*"));
// console.log([].reverse.call(str));

// // apply send the parameter in array
// console.log([].join.apply(str,["*"]));

// // bind makes reference function
// var fun = [].join.bind(str);


// // and then i make the execution once called
// console.log(fun("$"));



// function Person(nm,id)
// {
//     this.name = nm;
//     this.id = id;
// }


// Person.prototype.display = function(){
//     return this.name;
// }


// function Employee(nm,id,salary,dp)
// {


//     Person.call(this,nm,id);
    
//     // this.name = nm;
//     // this.id = id;
    
//     this.salary = salary;
//     this.db = dp;
// }

// Employee.prototype.display = function(){
//     return this.name+"::::"+this.id;
// }


// console.log(arr.j);console.log(fun("$"));

/***
 *
 * 
 * هنا البشمهندسة عايزة تقول ان الobj هو الarr
 * و الfunction 
 *  هو الjoin 
 * obj => arr
 * var obj = {
 *      fn=function(){
 * 
 *          this => str بدلناها
 * }
 * 
 * }
 *  
 * 
 * hard binding => لأنها بترجعلى reference من الfunction   
 * once 
 * func()
 * 
 */




/****
 * 
 * 
 * AJAX
 * 
 * 
 * xmlHttpRequest
 * اقدر اعمل request و اقدر اعمل event 
 * يعنى كل لما تتغير بيعمل fire event
 * 
 * ready state 
 * 0=> انا لسه ما بعتش event 
 * 1=>
 * 2=>
 * 3=>
 * 4=> operation done
 * 
 * 
 * 
 * response=> {
 *  
 * error , response 
 * 
 * 
 * }
 * 
 * 
 * 
 *  if you fetch all the data it's not the perfect way 
 * because the data is not updated 
 * 
 * 
 * 
 * 
 * 
 * 
 */


