// // declaritve  function
// // var val = "globalValue";

// // let arr = new Array()

// /**
//  *
//  *
//  *
//  *
//  *
//  *
//  *
//  *
//  *
//  */
// function Person(name, age, address) {
//   this.name = name;
//   this.age = age;
//   this.address = address;
//   this.greet2 = function () {
// 	console.log(this);

//     console.log("Hello, my name is " + this.name);

// 	return "this is object";
//   };
// }

// Person.prototype.greet = function (params) {
//   console.log(params);
// };

// let person = new Person("omar", 25, "this my new Contsructor");
// // console.log(person.greet2());

// // console.log(Person);

// // console.log(person.hasOwnProperty("greet"));
// // console.log(person.greet);
// // console.log(person.greet2);

// // const car = {
// //   brand: "Toyota",
// //    startEngine() {Person.apply(this,[name,age]);
// //     console.log(this);
// //     console.log(`Starting the ${this.brand} engine...`);
// //   },
// // };

// // // const bike = {
// // //   brand: "Harley Davidson",
// // // };

// // // Borrow the startEngine method from car and use it on bike

// // var brand = "asdas"
// // car.startEngine.call(this); // Output: Starting the Harley Davidson engine...

// function Employee(name,age,dept,salary) {
// 	this.Edept = dept;
// 	this.Esalary = salary;
// 	Person.apply(this,[name,age]);

// }

// Employee.prototype = Object.create(Person.prototype);

// // console.log(Employee.prototype,"adsad");

// Employee.prototype.constructor = Employee

// // Employee.prototype = Person.prototype

// const emp = new Employee("omar",12,"dept1",3000);
// // Employee.prototype.display = function () {
// // 	console.log("Hello from constructor Employee");

// // }
// // console.log(emp.display());

// console.log(emp.greet2());

// {
//   let x =0;
// }

// console.log(x);
// function fun() {
//   console.log(x);
//   {
//     let x = 10;

//   }
// }

// fun();

// const user = {
//   name :"omar",
//   age:25,
//   size:{
//     height:30,
//     width:50
//   },

//   sayHI : function sayHi(){
//     console.log(this.name);

//   }
// }
// const newUser = {
// ...user
// };
// //  Object.assign(newUser,user)
// // user.size.height = 300
// // console.log(newUser);
// // console.log(user);

// // newUser.sayHI = function (params) {
// //   console.log("goodBye");

// // }
// newUser.name = "Ali"
// newUser.sayHI()
// // user.sayHI()

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user2 = makeUser();

// console.log(user2.ref);

// let id = Symbol.for("foo");
// let id2 = Symbol.for("foo");
// console.log(Symbol.keyFor(id));
// console.log(id2);

// JSON.stringify()

// console.log(id===id2);



function fun(x=3,y=5,obj={}){/**issue with null & undfined */    
    var defaultObj = {
        nm:"ali",
        age:20,
        ...obj
    }
    var myObj={nm:obj.nm,age:obj.age}
    // console.log(obj.nm);
    

    var sum = x+y
    return `${sum} + ${myObj.nm} and ${myObj.age}`
}

// console.log(fun(1,2,{}))//3
console.log(fun(1,null,{nm:"ahmed",age:20}))//NaN//6
// console.log(fun("aa","x",undefined))//
// console.log(fun(1,2,{nm:'mona'}))//8
// console.log(fun(1,2,{age:25}))//8
// console.log(fun(1,2,{age:25,nm:'fady'}))//8



