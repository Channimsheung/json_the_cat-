const fetchBreedDescription = require("./breedFetcher");
//const arg = process.argv;
let breedName = process.argv[2];

fetchBreedDescription(breedName, (err, desc) => {
  if (err) {
    console.log("Error fetch details:", err);
  } else {
    console.log(desc);
  }
});

module.exports = fetchBreedDescription;
