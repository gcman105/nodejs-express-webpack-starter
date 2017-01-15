
// My code is below -----------------------------------
require("../sass/app.scss");

// get the system platform using node.js
var os = require("os");
// var printer = require('node-printer');
var platform = os.platform()
var fs = require('fs');

document.write("You are running on >>>", platform, "<<<");

// Get available printers list
// var listPrinter = printer.list();

// document.write(listPrinter, "<br />");

// Create a new Pinter from available devices
// var printer = new Printer('YOUR PRINTER HERE. GET IT FROM listPrinter');


// Example when handled through fs.watch listener
fs.watch('/Users/gcman105_mbp/temp', {encoding: 'utf8'}, (eventType, filename) => {
  if (filename)
    // console.log(filename);
    document.write("File >>>", filename, "<<< ", eventType, "<br />");
    // Prints: <Buffer ...>
});



// // Print from a buffer, file path or text
// var fileBuffer = fs.readFileSync('PATH TO YOUR IMAGE');
// var jobFromBuffer = printer.printBuffer(fileBuffer);

// // Listen events from job
// jobFromBuffer.once('sent', function() {
//     jobFromBuffer.on('completed', function() {
//         console.log('Job ' + jobFromBuffer.identifier + 'has been printed');
//         jobFromBuffer.removeAllListeners();
//     });
// });