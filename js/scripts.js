// array of club names
var orgNames = ["Speedy Sprinters", "Power Shots", "Diamond Bats"];

var orgSelectDropdown = document.getElementById("orgs");

// populating the dropdown from the array

orgNames.forEach(function (clubName) {
  var option = document.createElement("Option");
  option.value = clubName.toLowerCase().replace(/\s/g, "");
  option.text = clubName;
  orgSelectDropdown.appendChild(option);
});

function submitOrgSelected() {
  // just placeholder
  const selectedOption =
    orgSelectDropdown.options[orgSelectDropdown.selectedIndex];
  alert(`Selected ${selectedOption.text}`);
}
