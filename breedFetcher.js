const request = require("request");
const arg = process.argv;
let input = arg[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, function(
  error,
  response,
  body
) {
  if (error) {
    console.log("There is errors!");
  }
  const data = JSON.parse(body);
  //console.log(data[0].description);
  //console.log(typeof data);
  if (!data[0]) throw "There is no such breed in the list";
  console.log(data[0].description);
});
