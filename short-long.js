/*

by Tasye
2023

*/


// Problematic:
// it's embarassing (in french, maybe other languages)
// when you see for example : "Le tailleur de André"
//                                          ^^^
// in french you could write like this: "Le tailleur d'André"
//                                                   ---

/**
 * @description With the prefix and the name(as *item*) return the appropriated prefix
 * @author Tasye24
 * @param {object} prefix __prefix.long__: long version, __prefix.short__: short version
 * @returns {string} return the great prefix & the item
 * @type {(prefix: {long: string, short: string}, item: string) => string}
 * */
const take_long_or_short = (prefix, item) => {
  let space = " "; // can be alt+255 if troubles
  let voyels = "aeiouy"+"h";
  voyels = voyels.split("");

  let first_letter = item[0].toLowerCase();

  if (voyels.includes(first_letter)) {
    return prefix.short + item;
  } else {
    return prefix.long + space + item;
  }
}

/**
 * @param {string} pack name of the pack to import
 */
function pack_import(pack) {
  let pack_path = "./pack/" + pack + ".json"
  let pack_json = require(pack_path);
  //let pack_items = Object.keys(pack_json)
  return pack_json
}

let languages = ["fr-FR", "it-IT"]
let lang_packs = {}
languages.forEach((lang) => {
  let a = require("./pack/"+[lang]+".json")
  lang_packs[lang] = a // pack_import(lang);
})

/**
 * @param {string} language the language to use (fr-FR, it-IT, ...)
 * @param {string} word the in language
 * @returns {object} the object with the full & short version of the word
 * @type {(language: string, word: string) => {full: string, short: string, exeptions?: string}}
 */
function get_from_language(language, word) {
  let pack = lang_packs[language]
  let locale = language.split("-") // example "fr-FR" => ["fr", "FR"]
  let item = pack["data"][locale[0]][locale[1]]["defs"][word]
  return item
}

/**
 * @param {string} item the word for example a name like "Andrea"
 * @param {boolean} with_pack use the pack ?
 * @param {string?} language the language like "fr-FR"
 * @param {string|object} word the word like "le"
 * @type {(item: string, with_pack: boolean, word: string|{full: string, short: string, exeptions?: string}, language: string?) => string}
 * @example 
 * // With language_pack
 * let sentence = "Le vélo " + language("Andrea", true, "de", "fr-FR") 
 * // > sentence = "Le vélo d'Andréa"
 * @example
 * // Without language_pack
 * let word = {
 *  full: "de", 
 *  short: "d'", 
 * }
 * let sentence = "Le vélo " + language("Andrea", false, word)
 * // > sentence = "Le vélo d'Andréa"
 */
const language = (item, with_pack, word, language) => {
  let response;
  if(with_pack) {
    response = take_long_or_short(
      get_from_language(language, word), item
    )
  } else {
    response = take_long_or_short(word, item)
  }
  return response
}

/*console.log(
  "Le vélo "+ language("Andrea", true, "de", "fr-FR")
    + ' est dans ' +
    language("Arbre", true, "le", "fr-FR") + "."
  )*/

module.exports = take_long_or_short
module.exports = language