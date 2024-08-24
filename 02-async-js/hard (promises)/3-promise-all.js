/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 1 second");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 2 second");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 3 second");
    }, 3000);
  });
}

function calculateTime() {
  const start = Date.now();
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    (result) => {
      const totalTime = Date.now() - start;
      console.log(
        `Total Time to resolved all three function ${totalTime / 1000} seconds`,
      );
      console.log(result);
    },
  );
}

waitOneSecond().then((msg) => console.log(msg));
waitTwoSecond().then((msg) => console.log(msg));
waitThreeSecond().then((msg) => console.log(msg));
calculateTime();
