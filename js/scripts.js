// array of organization names
let orgNames = ["Diamond Bats", "Power Shots", "Speedy Sprinters"];

// array of team names for each organization
let orgTeams = {
  "Diamond Bats": ["Diamond Baseball", "Diamond Basketball", "Diamond Soccer", "Diamond Football"],
  "Power Shots": ["Power Baseball", "Power Basketball", "Power Soccer", "Power Football"],
  "Speedy Sprinters": ["Speedy Baseball", "Speedy Basketball", "Speedy Soccer", "Speedy Football"]
};

// Function to populate the Teams dropdown based on the selected organization
function populateTeamList(selectedOrg) {
  const teamSelectDropdown = document.getElementById("teams"); // Get the teams dropdown element

  teamSelectDropdown.innerHTML = ""; // Clear existing options

  if (selectedOrg !== "placeholder") {
    const teams = orgTeams[selectedOrg];

    teams.forEach(function (teamName) {
      var option = document.createElement("option");
      option.value = teamName.toLowerCase().replace(/\s/g, ""); // Set a unique value
      option.text = teamName; // Use the teamName to set the option text
      teamSelectDropdown.appendChild(option);
    });
  }
}

// Event listeners for radio buttons to select organizations
const orgDiamondRadio = document.getElementById("orgDiamondSelector");
const orgPowerRadio = document.getElementById("orgPowerSelector");
const orgSpeedyRadio = document.getElementById("orgSpeedySelector");
let selectedOrganization = "";

orgDiamondRadio.addEventListener("change", function () {
  if (orgDiamondRadio.checked) {
    populateTeamList("Diamond Bats"); // Update the selected organization here
    selectedOrganization = "Diamond Bats";
  }
});

orgPowerRadio.addEventListener("change", function () {
  if (orgPowerRadio.checked) {
    populateTeamList("Power Shots"); // Update the selected organization here
    selectedOrganization = "Power Shots";
  }
});

orgSpeedyRadio.addEventListener("change", function () {
  if (orgSpeedyRadio.checked) {
    populateTeamList("Speedy Sprinters"); // Update the selected organization here
    selectedOrganization = "Speedy Sprinters";
  }
});

// Function to handle the submission of the organization selection
function submitOrgSelected() {
  const selectedOrg = document.getElementById("orgs").value; // Get the selected organization
  if (selectedOrg !== "placeholder") {
    populateTeamList(selectedOrg); // Populate the teams dropdown based on the selected organization
  }
}

// Function to handle the submission of the team selection
function submitTeamSelected() {
  const selectedTeam = document.getElementById("teams").value; // Get the selected team
  if (selectedTeam !== "placeholder") {
    // You can do something with the selected team here
    window.location.href = `form.html?org=${selectedOrg}&team=${selectedTeam}`;
    console.log("Selected Team: " + selectedTeam);
  }
}


const submitTeamButton = document.getElementById("submitTeamButton");

// Add a click event listener to the button
submitTeamButton.addEventListener("click", function () {
    // Redirect to form.html when the button is clicked
    window.location.href = "../form.html";
});