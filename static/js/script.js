var slider = document.getElementById("myRange");
var output = document.getElementById("output");

// Set the output and slider value from localStorage if available
output.innerHTML = localStorage.getItem("refreshRate") || slider.value;
slider.value = localStorage.getItem("refreshRate") || slider.value;

// Update the refresh meta tag immediately
updateRefreshRate(slider.value);

slider.oninput = function () {
  output.innerHTML = this.value;
  localStorage.setItem("refreshRate", this.value); // Store the value in localStorage
  updateRefreshRate(this.value);
};

function updateRefreshRate(value) {
  // Update the refresh rate in the meta tag
  var metaRefresh = document.querySelector('meta[http-equiv="refresh"]');
  if (metaRefresh) {
    metaRefresh.setAttribute("content", value);
  }
}
