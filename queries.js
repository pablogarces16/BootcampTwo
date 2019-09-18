/* Add all the required libraries*/
var mongoose = require("mongoose"),
  listings = require("./ListingSchema"),
  config = require("./config");

mongoose.connect(config.db.uri, { useNewUrlParser: true });
/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   listings.findOne({name: "Library West"}).then(res => console.log(res));
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   listings.findOneAndDelete({code: "CABL"}).then(res => console.log(res));
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then
    log the updated document to the console.

    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
   listings.findOneAndUpdate({
     name: "Phelps Laboratory",
     address: "1953 Museum Rd, Gainesville, FL 32603"
   }).then(res => console.log(res));
};

var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   listings.find({}).then(res => console.log(res));
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
