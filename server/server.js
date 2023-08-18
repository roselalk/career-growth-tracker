const fs = require("fs");
const path = require("path");

const xml2js = require("xml2js");
const parser = new xml2js.Parser();

const moveFrom = "./XMLfiles"
const moveTo = "./Archive"

const XMLtoJSONconverter = async () => {
  try {

    const files = await fs.promises.readdir("./XMLfiles");

    for (const file of files) {

      const fromPath = path.join(moveFrom, file);
      const toPath = path.join(moveTo, file);

      fs.readFile(file, function (err, data) {

        const trimmedFileName = file.replace(/\.[^/.]+$/, "");
        
        parser.parseString(data, (result) => {
          fs.writeFile(`./JSONfiles/${trimmedFileName}.json`, JSON.stringify(result, null, 2), 'utf-8', (err, result) => {})
        });
      });

      await fs.promises.rename(fromPath, toPath);
    }
  } catch (e) {
    console.error("Oops, something went wrong!");
  }
};

XMLtoJSONconverter();

