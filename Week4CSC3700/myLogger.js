const error = "Error";
const warning = "WARNING";
const info = "Info";

function logIt(message, level = info) {
    console.log(`MSG: Level: ${level} MSG: ${message}`);
}

function logItFancy(message, level = info) {
    console.log(`------------- MSG: Level: ${level} MSG: ${message} ------`);
}

module.exports.logIt = logIt;
module.exports.logItFancy = logItFancy;
module.exports.error = error;
module.exports.warning = warning;