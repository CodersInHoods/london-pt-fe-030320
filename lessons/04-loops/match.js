const matchData = {
  home: {
    name: "Spurs",
    players: [
      {
        name: "kane",
        goals: 1,
        passCompletion: 0.92,
        subbed: true
      },
      {
        name: "son",
        goals: 2,
        passCompletion: 0.2,
        subbed: false
      },
      {
        name: "alli",
        goals: 0,
        passCompletion: 0.72,
        subbed: false
      }
    ]
  },
  away: {
    name: "Arsenal",
    players: [
      {
        name: "ozil",
        goals: 0,
        passCompletion: 0.72,
        subbed: true
      },
      {
        name: "pepe",
        goals: 0,
        passCompletion: 0.7,
        subbed: false
      },
      {
        name: "xhaka",
        goals: 0,
        passCompletion: 0.52,
        subbed: false
      }
    ]
  }
};

function allPlayers() {
  const players = [];

  for (const player of matchData.home.players) {
    players.push(player);
  }
  for (const player of matchData.away.players) {
    players.push(player);
  }

  return players;
}

function subbedPlayers() {
  const players = [];

  for (const player of allPlayers()) {
    if (player.subbed) {
      players.push(player.name);
    }
  }

  return players;
}

1 === 1; // true
1 === 2; // false

function calculateScore(team) {
  let score = 0;

  for (let index = 0; index < team.players.length; index++) {
    const player = team.players[index];
    score += player.goals;
  }

  return score;
}

function bestPasser() {
  let passValue = 0;
  let passer;

  for (const player of allPlayers()) {
    if (player.passCompletion > passValue) {
      passValue = player.passCompletion;
      passer = player;
    }
  }

  return passer.name;
}

function worstPasser() {
  let passValue = 1;
  let passer;

  for (const player of allPlayers()) {
    if (player.passCompletion < passValue) {
      passValue = player.passCompletion;
      passer = player;
    }
  }

  return passer.name;
}

function bestAndWorstPassers() {
  return {
    best: bestPasser(),
    worst: worstPasser()
  };
}

function winner() {
  const homeScore = calculateScore(matchData.home);
  const awayScore = calculateScore(matchData.away);
  if (homeScore > awayScore) {
    return matchData.home;
  } else if (awayScore > homeScore) {
    return matchData.away;
  } else {
    return undefined;
  }
}

function averagePassCompletion(team) {
  let sumPassCompletions = 0;

  for (const player of team.players) {
    sumPassCompletions += player.passCompletion;
  }

  return sumPassCompletions / team.players.length;
}

console.log(subbedPlayers());
console.log(calculateScore(matchData.home));
console.log(calculateScore(matchData.away));

console.log(bestPasser());

console.log(winner());

console.log(averagePassCompletion(matchData.home));
console.log(averagePassCompletion(matchData.away));

console.log(bestAndWorstPassers());
