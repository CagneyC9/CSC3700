// const l = require('./myLogger');
const {logIt, logItFancy, error, warning} = require('./myLogger');
logItFancy( "This is a test ", "Warning");
logIt( "This is a test ", "Warning");
console.log(`Error: ${error}`)
console.log(`W: ${warning}`)