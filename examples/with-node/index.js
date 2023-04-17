// npm i tasye-language-tools 
const lang = require("../../short-long")

lang = take_short_or_long
let a = lang({
    long: "Le vélo de", // long
    short: "Le vélo d'" // short
}, "Mike")


console.log(a)