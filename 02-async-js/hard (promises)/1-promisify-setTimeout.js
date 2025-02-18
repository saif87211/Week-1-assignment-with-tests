/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
console.log("Execuation starts");
function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise resolved after " + n + " seconds");
        }, n * 1000);
    });
}
wait(5).then((message) => console.log(message));
