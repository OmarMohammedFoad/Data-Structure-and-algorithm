let form = document.getElementById("form");
let selectedImage = document.querySelector(".selectGender");

let imgSrc = null;
selectedImage.childNodes.forEach(function (ele) {
  ele.addEventListener("click", function () {
    imgSrc = this.src;
  });
});
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let formData = new FormData(form);

  let visitCount = hasStorage("visitCount")
    ? parseInt(getStorage("visitCount"))
    : 0;
  visitCount += 1;
  createLocalStorage("visitCount", visitCount);

  if (imgSrc) {
    formData.append("selectedImage", imgSrc);
  }

  for (let [key, value] of formData.entries()) {
    createLocalStorage(key, value);
  }

  location.href="showData.html"

});

function createLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function hasStorage(key) {
  return localStorage.getItem(key);
}

function getStorage(key) {
  return localStorage.getItem(key);
}

