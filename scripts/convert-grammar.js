/** Converts a TextMate XML/Plist-grammar into JSON. */
const plist = require("fast-plist");
const process = require("process");
const path = require("path");
const fs = require("fs");

const args = process.argv;
if (args.length == 3) {
    const inputFile = args[2];
    const outputFile = `${inputFile}.json`;

    fs.readFile(inputFile, { encoding: "utf8" }, (err, data) => {
        if (err) console.log(err);
        const grammar = plist.parse(data);
        const grammarJSON = JSON.stringify(grammar, null, 4);
        fs.writeFile(outputFile, grammarJSON, "utf8", err => console.log(err));
    });
} else {
    console.log(`Usage: node ${args[1]} [path/to/grammar.tmLanguage]`)
}
