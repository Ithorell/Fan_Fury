const rootApi = 'https://api.sportsdata.io/v3/nfl/';
const apiKey = '?key=a5e2eba777e4407396d813ee1fa5ef6d';
const news = 'scores/json/News';
const season = 'scores/json/TeamSeasonStats/';
const seasonYear = '2022';
let newTeam = '';
const newsFeed = document.getElementById('newsFeed');

// gathering the team ID based on the user input
document.querySelectorAll('.logo').forEach((item) => {
  item.addEventListener('click', (event) => {
    const team = item.id;
    newTeam = team;
    getSeason();
  });
});

// ! this API is not currently being used
// const getData = function () {
//   const scores = rootApi + news + apiKey;
//   fetch(scores)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };
// getData();

// todo team stats by season (passing yards,rushing yards, touchdowns, fieldgoalsmade)
// todo team standings

// season stats API
const getSeason = function () {
  const newSeason = rootApi + season + seasonYear + apiKey;
  fetch(newSeason)
    .then((response) => response.json())
    // .then((data) => console.log(Object.keys(data)));
    .then((data) => {
      // need filter method
      const teamData = data.filter((item) => item.Team === newTeam);
      console.log(teamData);
      const passingYards = teamData[0].PassingYards;
      console.log(passingYards);
      const rushingYards = teamData[0].RushingYards;
      console.log(rushingYards);
      const touchdowns = teamData[0].Touchdowns;
      console.log(touchdowns);
      const fieldgoalsmade = teamData[0].FieldGoalsMade;
      console.log(fieldgoalsmade);
    });
};
