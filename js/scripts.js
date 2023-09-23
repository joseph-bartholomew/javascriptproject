const submitOrgButton = document.getElementById("submitOrgButton");
const teamSubmitButton = document.getElementById("submitTeamButton");

// array of organization names
let orgNames = ["Diamond Bats", "Power Shots", "Speedy Sprinters"];

// array of team names for each organization
let orgTeams = {
  "Diamond Bats": [
    "Diamond Baseball",
    "Diamond Basketball",
    "Diamond Soccer",
    "Diamond Football",
  ],
  "Power Shots": [
    "Power Baseball",
    "Power Basketball",
    "Power Soccer",
    "Power Football",
  ],
  "Speedy Sprinters": [
    "Speedy Baseball",
    "Speedy Basketball",
    "Speedy Soccer",
    "Speedy Football",
  ],
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

// Function to handle the submission of the organization selection
function submitOrgSelected() {
  const selectedOrg = document.getElementById("orgs").value; // Get the selected organization
  if (selectedOrg !== "placeholder") {
    populateTeamList(selectedOrg); // Populate the teams dropdown based on the selected organization
    submitOrgButton.style.background = "#93c47d";
  }
}

// Function to handle the submission of the team selection
function submitTeamSelected() {
  const selectedTeam = document.getElementById("teams").value; // Get the selected team
  if (selectedTeam !== "placeholder") {
    submitTeamButton.style.background = "#93c47d";
  }
}

const nextPageBtn = document.getElementById("nextPageBtn");

// Add a click event listener to the button
nextPageBtn.addEventListener("click", function () {
  // Get the selected organization and team values
  const selectedOrg = document.getElementById("orgs").value;
  const selectedTeamDropdown = document.getElementById("teams");
  const selectedTeamIndex = selectedTeamDropdown.selectedIndex;
  const selectedTeam = selectedTeamDropdown.options[selectedTeamIndex].text;
  if (selectedOrg !== "placeholder" && selectedTeam !== "placeholder") {
    // Redirect to form.html with query parameters
    window.location.href = `form.html?org=${selectedOrg}&team=${selectedTeam}`;
  }
});
