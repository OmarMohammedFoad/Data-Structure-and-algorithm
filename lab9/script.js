function linkedList() {
  var list = [];

  this.enqueue = function enqueue(data) {
    if (list.length == 0 || data > list[list.length - 1]) {
      list.push(data);
    } else {
      throw new Error("the number must be in sequence");
    }
  };

  this.pop = function () {
    if (list.length == 0) {
      throw new Error("list is empty.");
    }
    list.pop();
  };

  this.dequeue = function () {
    if (list.length == 0) {
      throw new Error("list is empty.");
    }
    list.shift();
  };

  this.insert = function (data, index) {
    if (index < 0 || index > list.length) {
      throw new Error("index invalid");
    }

    if (
      (index == 0 && (list.length == 0 || data < list[0])) ||
      (index > 0 &&
        index < list.length &&
        data > list[index - 1] &&
        data < list[index]) ||
      (index == list.length && (list.length == 0 || data > list[index - 1]))
    ) {
      list.splice(index, 0, data);
    } else {
      throw new Error("index invalid");
    }
  };

  this.remove = function (data,index) {
   
    if(list.indexOf(data)==-1){
      throw new Error("data not found");
    }
    list.splice(index, 1);
    
  };
  
    this.display = function () {
        return list;
    };
}



var list = new linkedList();
list.enqueue(1);
list.enqueue(2);
list.enqueue(3);
list.enqueue(4);
list.enqueue(5);
list.enqueue(6);
list.enqueue(0);
list.enqueue(8);


console.log(list.display());
list.pop();
console.log(list.display());

list.dequeue();
console.log(list.display());
