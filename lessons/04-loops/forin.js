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
    if (labels.length < 2) {
      labels.push(key);
    } else {
      console.log("oops the labels array is full");
    }
  }

  return labels;
}

console.log(createGraphLabels(data));
console.log(createGraphLabels(matchData));
console.log(createGraphLabels(matchData.home));
