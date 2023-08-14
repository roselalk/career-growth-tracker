const fs = require("fs");

const xml2js = require("xml2js");
const parser = new xml2js.Parser();

const timerId = setInterval(() => {
  try {
    getXML();
  } catch (error) {
    console.log(error);
  }
}, 500);

// setTimeout(() => {
//   clearInterval(timerId);

//   console.log("stop");
// }, 250);

const getXML = async () => {
  fs.readFile(__dirname + "/test.xml", function (err, data) {
    parser.parseString(data, function (err, result) {
      console.dir(result.rss.channel);
      console.dir(result.rss.channel[0].item);
      console.log("Done");
    });
  });
};

// iedere 500ms checken of map /server/xml-files/ nieuw bestand(en)
// indien nieuw bestand: uitlezen met xml2js
// op basis van jira id kijken of deze al bestaat in /server/json-files/
// indien wel bestaand: oude deleten en nieuw JSON object maken en daar alleen relevante informatie in opslaan
// indien niet bestaand: nieuw JSON object maken en daar alleen relevante informatie in opslaan
// xml bestand verwijderen

// los een API service maken die aangeroepen kan worden en alle JSON files exposed
