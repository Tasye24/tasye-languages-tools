// Type definitions for Tasye-languages-tools v.0.0.3
// Project: Tasye Languages Tools
// Definitions by: @Tasye24 <[https://github.com/tasye24]>




// ======= Disabled
// ======= Refer using JsDOC in code
// ======= Seems this method is less efficient
// ======= For the moment 


/*

export as namespace TasyeLanguageTools

export class TasyeLanguageTools {
    constructor(lang?: string);
    elision(): TLT.language
    variables: {
        language: string[]
        version: string
    }
}

declare namespace TLT {
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
     * /
    export interface language {
        item: string
        with_pack: boolean
        language?: string
        word: string|object
    }
    export interface variables {
        /**
         * SMTHIN
         * @param language
         * /
        language: string[]
        version: string
    }
}


in comment like /* * / remove the last space thx if you want to use it

*/