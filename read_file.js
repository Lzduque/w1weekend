// REFERENCE!!
// var fs = require("fs");

// var filePath = "/tmp/test_async.txt";
// var fileData = "Testing asynchronous file write.\n";

// fs.writeFile(filePath, fileData, function(err) {
//   if (err) {
//     throw err;
//   }
//   console.log("Successfully wrote to", filePath);
// });

console.log(process.argv[2]); //process.argv creates an array with the paths to the elements of the argvs


var filePath = process.argv[2];
var fs = require("fs");
var buf = new Buffer(1024);

fs.open(filePath, 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   // console.log("File opened successfully!");
   // console.log("Going to read the file");

   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      // console.log(bytes + " bytes read");

      // Print only read bytes to avoid junk.
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});