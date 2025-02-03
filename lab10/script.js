onload = function () {
  var selectedBand = document.querySelector(".bands");
  var viewBand = this.document.querySelector(".favourite_band");

  var xhr = new XMLHttpRequest();

  // console.log(selec);

  selectedBand.addEventListener("click", function () {
    // console.log(selectedBand.options[selectedBand.options.selectedIndex]);

    var value = selectedBand  .value;

    // console.log(value);

    fetchData(value);
  });

  function fetchData(favouriteband) {
    // console.log(xhr.status);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        console.log(xhr.status);
        if (xhr.status >= 200 && xhr.status < 300) {
          // console.log(xhr.responseText);

          var data = JSON.parse(xhr.responseText);
          var bandsName = [];
          if (favouriteband) {
            viewBand.innerHTML = "";

            // console.log(data[favouriteband]);
            var dataFiltred = data[favouriteband];

            for (var i = 0; i < dataFiltred.length; i++) {
              // console.log(dataFiltred[i],"asdsad");
              var option = document.createElement("option");
              option.value = dataFiltred[i].value;
              option.innerHTML = dataFiltred[i].name;

              viewBand.appendChild(option);
            }
          } else {
            // for (const element in data) {
            //   bandsName.push(element);
            // }
            // // console.log(bandsName);
            // for (let i = 0; i < bandsName.length; i++) {
            //   var option = document.createElement("option");
            //   option.value = bandsName[i];
            //   option.innerHTML = bandsName[i];
            //   selectedBand.appendChild(option);
            // }

            Object.keys(data).forEach((name) => {
              var option = document.createElement("option");
              option.innerHTML = name;
              selectedBand.appendChild(option);
            });
          }
        } else {
          console.log("there is error");
        }
      }
    };

    xhr.open("GET", "./data.json");
    xhr.send();
    return;
  }

  viewBand.addEventListener("click", function () {
    var value = viewBand.options[viewBand.options.selectedIndex].value;

    if (value) {
      window.location.href = value;
    }
  });

  fetchData();
};
