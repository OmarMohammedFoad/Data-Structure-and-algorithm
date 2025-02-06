var obj = {
  userName: "omar",
  address: "cairo",
  age: 20,
};

var handler = {
  get(target, prop) {
    if (target.hasOwnProperty(prop)) {
      return target[prop];
    } else {
      throw "Undefined property";
    }
  },

  set(target, prop, value) {
    if (!target.hasOwnProperty(prop)) {
      throw "Property not defined";
    }

    if (prop === "userName") {
      if (typeof value != "string") {
        throw "username  must be string";
      }
      if (value.length != 7) {
        throw "username length must be exactly 7 characters";
      }
      target[prop] = value;
      return true;
    }

    if (prop === "address") {
      if (typeof value != "string") {
        throw "address length must be string";
      }
      target[prop] = value;
      return true;
    }

    if (prop === "age") {
      if (typeof value != "number") {
        throw "username length must be number";
      }
      if (value >= 25 && value <= 60) {
        throw "age must be between 25 and 60";
      }
      target[prop] = value;
      return true;
    }
  },
};

var myProxy = new Proxy(obj, handler);
