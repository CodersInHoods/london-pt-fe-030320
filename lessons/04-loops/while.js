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

function findPlayer(name, players) {
  let index = 0;
  while (players[index] !== name) {
    console.log(players[index], ":(");
    index++;
  }
  console.log(players[index], ":)");
}

findPlayer("Alli", matchData.home.players);
findPlayer("Luiz", matchData.away.players);

function wait(duration) {
  let time = Date.now();
  while (time + duration > Date.now()) {
    // console.log("waiting");
  }
  console.log("finished waiting!");
}

// wait(10000);
console.log(Date.now());
