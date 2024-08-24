const fs = require("fs");
console.log("Expensive Operation1 starts");
let x = 0;
for (let i = 0; i < 1000000; i++) {
  x++;
}

let data =
  " Some Intro to Javascript: JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.";

fs.writeFile("./data.txt", data, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log("File written successfully");
});
console.log("Expensive Operation2 starts");
let h = 0;
for (let i = 0; i < 1000000; i++) {
  h++;
}
console.log("Expensive Operation2 Ends");
