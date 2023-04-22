// Type definitions for Tasye-languages-tools v.0.0.3
// Project: Tasye Languages Tools
// Definitions by: @Tasye24 <[https://github.com/tasye24]>
/*~ This is the module template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */
/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace Tasye_Languages_Tools

export const tasye_current_version = "0.0.3"
export const ListOfLanguages:["fr-FR","it-IT"]

/**
 * Function Language
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
export function language(item: string, with_pack:boolean, word: string, language?:string):string