// ASYNC CODE

const syncTimeout = (callback, time) => {
  const startTime = Date.now(); // 1000

  while (startTime + time > Date.now()) {
    // do nothing
  }

  callback();

  return Date.now()
};

console.log("starting sync timeout", Date.now());
const newTime = syncTimeout(() => {
  console.log("timeout finished");
}, 2000);
console.log("ending sync timeout", newTime);

console.log("starting set timeout", Date.now());
setTimeout(() => console.log("setTimeout finished", Date.now()), 2000);
console.log("ending set timeout");
