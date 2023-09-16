// array of club names
var clubNames = ["Speedy Sprinters", "Power Shots", "Diamond Bats"];

var clubSelectDropdown = document.getElementById("clubs");

// populating the dropdown from the array

clubNames.forEach(function (clubName) {
  var option = document.createElement("Option");
  option.value = clubName.toLowerCase().replace(/\s/g, "");
  option.text = clubName;
  clubSelectDropdown.appendChild(option);
});

function submitCLubSelected() {
  // just placeholder
  const selectedOption =
    clubSelectDropdown.options[clubSelectDropdown.selectedIndex];
  alert(`Selected ${selectedOption.text}`);
}
