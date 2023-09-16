
function selectOrganization() {
    const selectedOrg = document.getElementById('organizationDropdown').value;

    fetchTeamsOrClubs(selectedOrg);
  }

  function fetchTeamsOrClubs(organization) {

    const teamsOrClubs = getTeamsOrClubsFromAPI(organization);
  

    updateTeamsOrClubsUI(teamsOrClubs);
  }
 
  function displayRegistrationForm(teamOrClub) {

    const page1 = createPage1Form();

    page1.querySelector('#nextButton').addEventListener('click', () => {

      const page2 = createPage2Form();
  
  
      page2.querySelector('#submitButton').addEventListener('click', () => {
   
        submitRegistrationData();
      });
    });
  }
  

  function createPage1Form() {

  }

  function createPage2Form() {

  function submitRegistrationData() {
 
  }
  
 
  function getTeamsOrClubsFromAPI(organization) {

  }
  

  function updateTeamsOrClubsUI(teamsOrClubs) {
 
  }
  

  document.getElementById('organizationDropdown').addEventListener('change', selectOrganization);
  
();
  