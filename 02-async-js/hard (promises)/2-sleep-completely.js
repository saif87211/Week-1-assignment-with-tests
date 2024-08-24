/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const time = Date.now() + seconds;
  while (Date.now() < time) {}
}

console.log("Execuation starts");
sleep(5);
console.log("Execuation ends");
