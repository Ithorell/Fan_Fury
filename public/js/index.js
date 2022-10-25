const rootApi = 'https://api.sportsdata.io/v3/nfl/';
const apiKey = '?key=a5e2eba777e4407396d813ee1fa5ef6d';
const news = 'scores/json/News';
const season = 'scores/json/TeamSeasonStats/';
const seasonYear = '2022';
let newTeam = '';
document.querySelectorAll('.logo').forEach((item) => {
  item.addEventListener('click', (event) => {
    const team = item.id;
    console.log('team ' + team);
    newTeam = team;
    console.log('new Team ' + newTeam);
    getSeason();
  });
});

// news api0
const getData = function () {
  const scores = rootApi + news + apiKey;
  fetch(scores)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
getData();
// stick with news feed
// team stats by season (passing yards,rushing yards, touchdowns, fieldgoalsmade)
// team standings

const getSeason = function () {
  const newSeason = rootApi + season + seasonYear + apiKey;
  fetch(newSeason)
    .then((response) => response.json())
    // .then((data) => console.log(Object.keys(data)));
    .then((data) => {
      // need filter method
      const teamData = data.filter((item) => item.Team === newTeam);
      console.log(teamData);
    });
};

// getSeason();
