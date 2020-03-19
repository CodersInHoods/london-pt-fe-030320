const matchData = {
  home: {
    name: "Spurs",
    score: 3,
    players: ["Kane", "Alli", "Son", "Lloris"]
  },
  away: {
    name: "Arsenal",
    score: 0,
    players: ["Özil", "Pépé", "Xhaka", "Luiz"]
  }
};

for (let key in matchData) {
  console.log(key);
  for (let teamKey in matchData[key]) {
    console.log(teamKey, matchData[key][teamKey]);
  }
}

const data = {
  "0-5": 10,
  "5-20": 100,
  "20-40": 1000,
  "40-80": 10000
};

function createGraphLabels(object) {
  const labels = [];

  for (let key in object) {
    labels.push(key);
  }

  return labels;
}

const ageRanges = createGraphLabels(data);
const teamLocations = createGraphLabels(matchData);
const teamProperties = createGraphLabels(matchData.home);

function printLabels(labels, label) {
  for (let value of labels) {
    console.log(`${label}: ${value}`);
  }
}

printLabels(ageRanges, "age range");
printLabels(teamLocations, "team location");
printLabels(teamProperties, "team property");

function iterateUp(array) {
  for (let value of array) {
    console.log(value);
  }
}

function iterateDown(array) {
  for (let value of array.reverse()) {
    console.log(value);
  }
}

iterateUp(matchData.home.players);
iterateUp(matchData.away.players);
iterateDown(matchData.home.players);
iterateDown(matchData.away.players);
