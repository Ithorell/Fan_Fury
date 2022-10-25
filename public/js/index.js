const rootApi = 'https://api.sportsdata.io/v3/nfl/';
const apiKey = '?key=a5e2eba777e4407396d813ee1fa5ef6d';
const news = 'scores/json/News';
const teamName = ''; //id of the targeted element chosen
// news api
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
