import {
  clearCookies,
  deleteCookie,
  getAllcookies,
  hasCookie,
  createCookies,
} from "./cookiesLib";

if (!window.localStorage) {
  console.log("your browser doesnot contain localstorage");

  window.localStorage = {
    getItem: function (key) {
      return hasCookie(key);
    },
    setItem: function (key, val) {
      createCookies(key, val);
    },
    removeItem: function (key) {
      deleteCookie(key);
    },
    clear: function () {
      clearCookies();
    },
  };
}
