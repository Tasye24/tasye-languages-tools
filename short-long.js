// Problematic:
// it's embarassing (in french, maybe other languages)
// when you see for example : "Le tailleur de André"
//                                          ^^^
// in french you could write like this: "Le tailleur d'André"
//                                                   ---

/**
 * @description With the prefix and the name(as *item*) return the appropriated prefix
 * @author Tasye24
 * @param {Object} prefix __prefix.long__: long version, __prefix.short__: short version
 * @returns {String} return the great prefix & the item
 * @type {(prefix: {long: string, short: string}, item: string) => string}
 * */
function take_long_or_short(prefix, item) {
  let space = " "; // can be alt+255 if troubles
  let voyels = "aeiouy";
  voyels = voyels.split("");

  let first_letter = item[0].toLowerCase();

  if (voyels.includes(first_letter)) {
    return prefix.short + item;
  } else {
    return prefix.long + space + item;
  }
}

// examples
let items = ["Aaron", "Martin", "Jacques", "Georges"];
let pre = "Le vélo ";
// pref for example : 
/* pref= {
  long: "de" OR "le" OR "la"
  short: "d'" OR "l'" OR "l'"
}
*/
let pref = {
  long: pre + "de",
  short: pre + "d'",
};

items.forEach((element) => {
  a = take_long_or_short(pref, element);
  console.log(a);
});
