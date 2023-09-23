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

// array of team names
var teamNames = ["Basketball", "Baseball", "Football", "Volleyball", "Softball"];

var teamSelectDropdown = document.getElementById("teams");

// populating the dropdown from the array

teamNames.forEach(function (teamName) {
  var option = document.createElement("option");
  option.value = teamName.toLowerCase().replace(/\s/g, "");
  option.text = teamName;
  teamSelectDropdown.appendChild(option);
});

function submitTeamSelected() {
  // just a placeholder
  const selectedOption =
    teamSelectDropdown.options[teamSelectDropdown.selectedIndex];
  alert(`Selected ${selectedOption.text}`);
}
