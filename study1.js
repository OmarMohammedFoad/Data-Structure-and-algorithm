// var username = "omar";c

var obj = {
  username: "omar",
  age: 50,
  display: function () {
    setTimeout(function () {
      alert(this.username);
    }, 2000);
  },
  //   display:function(){

  //     return this.username // Reference error, undefined

  //   }
  //   display: function () {setTimeout
  //     setTimeout(() => { // lexical binding

  //         /*
  //             beta5od nos5a mn main object ma3aha wa2t ma tetkaryet
  //             beta3 el creator parent function
  //             mn creator function hena ???
  //             display function which is the caller
  //             tayb men el object beta3ha
  //             el obj

  //             so when i use this=> this is the refernce of the object "obj"
  //             this == {
  //             username
  //             age

  //             }

  //             used for inner functions only

  //         */

  //     }, 2000);
  //   },
  //   popMsg: function () {
  //     console.log(this.age);
  //   },

  // function(){
};

// var x = obj.display();

// console.log(x);




//  we create the class in JS its a function 

// this is constructor function
// function Employee(nm,id,dept,abc){
//     var xyz = "asdasadsas";
//     // these are the proberty
//     // var xyz = abc;
//     this.empName = nm,
//     this,empId = id,
//     this.empDept = dept
//     // this.display = function() {
//     //     return this.empName;
//     // };

//     this.get= function(){
//         return xyz;
//     }
// }

// this the method object 
// Employee.prototype.display=function(val){
//     // console.log(val);
//     xyz = val
    
// }


// // instantiate object not function
// let emp = new Employee("omar",3,"local","asdsa");
// Employee.prototype.prop ="xyz";
// // console.log(emp.);
// // letiral way
// // let arr = [1,2,3,4];

// // constructor way

// // let arr = new Array();



// let arr = new Array(1,34);
    

// console.log(Object.prototype);
// console.log(emp.__proto__,"emp obj");
// console.log(Employee.prototype,"Employee Consturctor opjec");

// emp.__proto__ === Employee.prototype
// console.log(Employee.prototype.__proto__);
// console.log(Object.prototype);

// Employee.prototype.__proto__ === Object.prototype
// Object.prototype.__proto__ === null


/*    ***
 * 
 *  emp
 * {
 *  name:"",
 *  dept,"",
 * 
 *  prototype: Object
 *  display : function (){}
 *  prop : "xyz"
 * 
 * }
 * 
 * 
 * 
 * 
 * 
 * 
 */


// litral function
// function myfun(x){
//     var val = "myval"
//     this.val = x;
//     this.fun = fun
//     this.fun()
//     fun()
// }






// function fun() {
//     console.log(this);
    
//     console.log(this.val);
// }

// var val = "globalValue";


// myfun("omar");

// console.log(val);


/***
 * globalfun
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */



function greet(name){
    console.log(this);
    
    console.log(`Hello, ${name}! My name is ${this.empName}.`);

}
// let peson   ={
//     name:"Ahmed"
// }


// function Employee(userName,userId){
//     this.empName = userName
//     this.empId = userId
// }


// let emp = new Employee("omar",23);

// greet.call(emp,"ismael");

let str = "javascript";




console.log([].join.call(str,","));
// console.log();

let arr = []
arr = [].reverse.apply(null,str.split(""))

console.log(arr);


