// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

let userFirstname = getInput(1)
let userLastname = getInput(2)
console.log("Hello, " + userFirstname + " " + userLastname)
console.log("Hey, " + userFirstname.toUpperCase() + " " + userLastname.toUpperCase() + " Im at the store.")
console.log(userFirstname[0] + "." + userLastname[0] + ".")
console.log(userFirstname[0] + userLastname + ".prsvr@gmail.com" )

    
