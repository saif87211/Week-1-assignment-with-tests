const fs = require("fs");

fs.readFile("data.txt", "utf8", (error, data) => {
  if (error) {
    throw new Error(error);
  }
  let newData = data.replace(/\s+/g, " ");
  fs.writeFile("data.txt", newData, (error) => {
    if (error) {
      throw new Error(error);
    }
    console.log("File Cleaned");
  });
});
