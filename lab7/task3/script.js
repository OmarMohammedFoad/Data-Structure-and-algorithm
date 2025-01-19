onload = function () {
  document.addEventListener('keyup', function (event) {
    switch (event.key) {
      case "Control":
        alert("Control key released : "+event.key);
        break;
      case "Shift":
        alert("Shift key released: "+event.key);
        break;
      case "Alt":
        alert("Alt key released: "+event.key);
        break;
      default:
        alert("Alt key released : "+ event.which);
        break;

    }
  });



}