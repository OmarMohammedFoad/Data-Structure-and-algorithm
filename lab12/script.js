

// question 1


// function courseInformation(obj = {}) {
//   // console.log(Object.keys(obj));

//   let defaulObj = {
//     courseName: "Es6",
//     courseDuration: "3days",
//     courseOwner: "Javascript",
//   };

//   const testObj = Object.keys(defaulObj);
//   for (const key in obj) {
//     if (!testObj.includes(key)) {
//       throw new Error(` not included : ${key}`);
//     }
//   }

//   let inernalObj = Object.assign({}, defaulObj, obj);
//   return {
//     course_name: inernalObj.courseName,
//     course_duration: inernalObj.courseDuration,
//     course_Owner: inernalObj.courseOwner,
//   };
// }

// try {
//   const courseInfo = courseInformation({
//     courseName: "react",
//     courseDuration: "5days",
//   });
//   console.log(courseInfo);
// } catch (error) {
//   console.error(error.message);
// }

/*****************************************************************************/


//  question 2


// let str = "this is a very long string bla bla bla";

// let myObj = {
//   [Symbol.replace]: function (str, char) {
//     const length = str.length;

//     let newArr = [];

//     for (let i = 0; i < 15; i++) {
//       newArr.push(str.split("")[i]);
//     }

//     if (length > 15) {
//       return newArr.join("") + char;
//     }

//     return str;
//   },
// };

/********************************************************************************* */
// question 3
let myReverseSplit = {
    [Symbol.split]:function(string){
      return  string.split(" ").reverse().join("$");;
    }
}


let str = "Another one bites the dust";

console.log(str.split(myReverseSplit));

/**************************************************************************** */


//question 4

// console.log(str.replace(myObj, "..."));

// let obj = {
//   nm: "ali",
//   age: 20,
//   [Symbol.iterator]: function () {
//     var keys = Object.keys(obj); //["nm","age"]
//     var counter = 0;
//     return {
//       next: function () {
//         if (counter >= keys.length) {
//           return { value: undefined, done: true };
//         } else {
//             values= {key: keys[counter], value: obj[keys[counter]]}
//             counter++;
//             return {
//                 value: values,
//                 done: false,
//             };
//         }
//       },
//     };
//   },
// };

// for (var elem of obj) {
//   console.log(elem);
// }




