// array of club names
var orgNames = ["Speedy Sprinters", "Power Shots", "Diamond Bats"];

var orgSelectDropdown = document.getElementById("orgs");

// populating the dropdown from the array

orgNames.forEach(function (orgName) {
  var option = document.createElement("Option");
  option.value = orgName.toLowerCase().replace(/\s/g, "");
  option.text = orgName;
  orgSelectDropdown.appendChild(option);
});

function submitOrgSelected() {
  // just placeholder
  const selectedOption =
    orgSelectDropdown.options[orgSelectDropdown.selectedIndex];
  alert(`Selected ${selectedOption.text}`);
}
