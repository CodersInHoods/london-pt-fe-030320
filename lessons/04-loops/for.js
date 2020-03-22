const matchData = {
  home: {
    name: "Spurs",
    score: 3,
    players: [
      {
        name: "kane",
        goals: 1,
        passCompletion: 0.92,
        subbed: true
      },
      {
        name: "son",
        goals: 1,
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
    score: 0,
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

function iterateUp(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

function iterateDown(array) {
  for (let index = array.length - 1; index >= 0; index--) {
    console.log(array[index]);
  }
}

function doTimes(times) {
  for (let number = 0; number < times; number++) {
    console.log(number);
  }
}

function randomNumberOfTimes() {
  const randomNumber = Math.random(); // 0.0000000-1.00000000
  for (let number = 0; number < randomNumber; number = Math.random()) {
    console.log(number, randomNumber);
  }
}

iterateUp(matchData.home.players);
iterateUp(matchData.away.players);
iterateDown(matchData.home.players);
iterateDown(matchData.away.players);

doTimes(15);
doTimes(150);

randomNumberOfTimes();
