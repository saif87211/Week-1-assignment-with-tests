const fs = require("fs");
console.log("Expensive Operation1 starts");
let x = 0;
for (let i = 0; i < 1000000; i++) {
  x++;
}
console.log("Expensive Operation1 Ends");

fs.readFile("./data.txt", "utf8", (err, data) => {
  if (err) {
    throw new Error(err);
  }
  console.log(data);
});
console.log("Expensive Operation2 starts");
let h = 0;
for (let i = 0; i < 1000000; i++) {
  h++;
}
console.log("Expensive Operation2 Ends");
