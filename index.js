const fs = require('fs');

fs.writeFile("./NEW_README.md", `
this is my readme, yay
yay
yay
yay
`, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 