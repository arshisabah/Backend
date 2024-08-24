import { writeFile } from "fs";

writeFile("message.txt","Hello this is my first code in node.js", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });

// fs.readFile("message.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
  