//f

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const org = params.get("org");
  const team = params.get("team");
  const firstName = params.get("firstName");
  const lastName = params.get("lastName");
  const username = params.get("username");
  const password = params.get("password");
  const state = params.get("state");
  const city = params.get("city");
  const zip = params.get("zip");

  return {
    org,
    team,
    firstName,
    lastName,
    username,
    password,
    state,
    city,
    zip,
  };
}
function updateInfo() {
  const {
    org,
    team,
    firstName,
    lastName,
    username,
    password,
    state,
    city,
    zip,
  } = getQueryParams();
  document.getElementById("orgInfo").textContent = org;
  document.getElementById("teamInfo").textContent = team;
  document.getElementById("firstNameInfo").textContent = firstName;
  document.getElementById("lastNameInfo").textContent = lastName;
  document.getElementById("usernameInfo").textContent = username;
  document.getElementById("passwordInfo").textContent = password;
  document.getElementById("stateInfo").textContent = state;
  document.getElementById("cityInfo").textContent = city;
  document.getElementById("zipInfo").textContent = zip;

  console.log("Org:", org);
  console.log("Team:", team);
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Username:", username);
  console.log("Password:", password);
  console.log("State:", state);
  console.log("City:", city);
  console.log("Zip:", zip);
}

//function updateForm() {
//     const { org, team } = getQueryParams();
//     if (org && team) {
//       // Update the form fields with the selected organization and team
//       document.getElementById("selectedOrg").textContent = `Org: ${org}`;
//       document.getElementById("selectedTeam").textContent = `Team: ${team}`;
//     }
// }

updateInfo();
