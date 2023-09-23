// array of club names
let teamNames = [];

let orgDiamondList = [
  "Diamond baseball",
  "Diamond basketball",
  "Diamond soccer",
  "Diamond football",
];
let orgPowerList = [
  "Power baseball",
  "Power basketball",
  "Power soccer",
  "Power football",
];
let orgSpeedyList = [
  "Speedy baseball",
  "Speedy basketball",
  "Speedy soccer",
  "Speedy football",
];

var teamSelectDropdown = document.getElementById("teamDropdown");

// populating the dropdown from the array

function populateTeamList() {
  teamSelectDropdown.innerHTML = "";

  teamNames.forEach(function (teamName) {
    var option = document.createElement("Option");
    option.value = teamName.toLowerCase().replace(/\s/g, "");
    option.text = teamName;
    teamSelectDropdown.appendChild(option);
  });
}

// Radio Selectors

const orgDiamondRadio = document.getElementById("orgDiamondSelector");
const orgPowerRadio = document.getElementById("orgPowerSelector");
const orgSpeedyRadio = document.getElementById("orgSpeedySelector");
let isChecked = false;
let selectedOrganization = "";

orgDiamondRadio.addEventListener("change", function () {
  if (orgDiamondRadio.checked) {
    console.log("Org diamond selected");
    teamNames = orgDiamondList.slice();
    console.log(teamNames);
    populateTeamList();
    selectedOrganization = "Diamond Bats";
    isChecked = true;
  }
});

orgPowerRadio.addEventListener("change", function () {
  if (orgPowerRadio.checked) {
    console.log("Org power selected");
    teamNames = orgPowerList.slice();
    console.log(teamNames);
    populateTeamList();
    selectedOrganization = "Power Shots";
    isChecked = true;
  }
});

orgSpeedyRadio.addEventListener("change", function () {
  if (orgSpeedyRadio.checked) {
    console.log("Org speedy selected");
    teamNames = orgSpeedyList.slice();
    console.log(teamNames);
    populateTeamList();
    selectedOrganization = "Speedy Sprinters";
    isChecked = true;
  }
});

function submitTeamSelected(event) {
  event.preventDefault(); //prevents page reloading when hitting submit
  // just placeholder

  // const selectedOption =
  //   teamSelectDropdown.options[teamSelectDropdown.selectedIndex];
  // document.getElementById(
  //   "teamSelected"
  // ).innerHTML = `Selected: ${selectedOption.text}`;
}

const orgSelectorDiv = document.getElementById("orgSelectorContainer");
const teamSelectorDiv = document.getElementById("teamSelectorContainer");

function setPageTeamSelect() {
  if (isChecked) {
    orgSelectorDiv.style.display = "none";
    teamSelectorDiv.style.display = "inline";
    document.getElementById(
      "selectInstructions"
    ).innerHTML = `Organization: ${selectedOrganization}<br>Select a team...`;
  } else {
    document.getElementById("errorMessage").style.display = "block";
  }
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
