let myText = document.getElementById("my-text");

// let redRange = document.getElementById('redSlider');
// let greenRange = document.getElementById('greenSlider');

// let blueRange = document.getElementById('blueSlider');

let ranges = document.querySelectorAll("input");

ranges.forEach((range) => {
  // console.log(range.id);

  range.addEventListener("input", function () {
    // console.log(this.id);

    let green = 0;
    let blue = 0;
    let red = 0;
    if (this.id === "greenSlider") {
      green = this.value;
    } else if (this.id === "redSlider") {
      red = this.value;
    } else if (this.id === "blueSlider") {
      blue = this.value;
    }

    myText.style.color = `rgb(${red}, ${green}, ${blue})`;

    // console.log(myText);
  });
});
