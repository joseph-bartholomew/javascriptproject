// Retrieve the organization and team values from query parameters
let org;
let team;

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  org = params.get("org");
  team = params.get("team");
  return { org, team };
}

// Function to update the form with selected organization and team
function updateForm() {
  const { org, team } = getQueryParams();
  if (org && team) {
    // Update the form fields with the selected organization and team
    document.getElementById("selectedOrg").textContent = `Org: ${org}`;
    document.getElementById("selectedTeam").textContent = `Team: ${team}`;
  }
}

// Call the updateForm function to display the selected organization and team
updateForm();
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("playerForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // prevent the page from reloading (testing)

      // get from data
      const firstName = document.getElementById("validationServer01").value;
      const lastName = document.getElementById("validationServer02").value;
      const username = document.getElementById(
        "validationServerUsername"
      ).value;
      const password = document.getElementById(
        "validationServerPassword"
      ).value;
      const city = document.getElementById("validationServer03").value;
      const state = document.getElementById("validationServer04").value;
      const zip = document.getElementById("validationServer05").value;

      // test
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Username:", username);
      console.log("Password:", password);
      console.log("City:", city);
      console.log("State:", state);
      console.log("Zip:", zip);

      const url = `confirmation.html?org=${org}&team=${team}&firstname=${firstName}&lastname=${lastName}&username=${username}&password=${password}&city=${city}&state=${state}&zip=${zip}`;

      // change page
      window.location.href = url;
    });
});
