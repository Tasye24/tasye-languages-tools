const assert = require("assert")
const library = require("../short-long")

let tests = {
    without_pack: [
        {
            actual: library("Andréa", 0,{full: "de",short: "d'"}),
            expected: "d'Andréa"
        }, {
            actual: library("Bobby", 0,{full: "de",short: "d'"}),
            expected: "de Bobby"
        }
    ],
    with_pack: [
        {
            actual: library("Andréa", 1, "de", "fr-FR"),
            expected: "d'Andréa"
        }, {
            actual: library("bus", 1, "le", "fr-FR"),
            expected: "le bus"
        }, {
            actual: library("autobus", 1, "lo", "it-IT"),
            expected: "l'autobus"
        }, {
            actual: library("fratello", 1, "lo", "it-IT"),
            expected: "lo fratello"
        }
    ]
}

/**
 * @type {(array: [{actual, expected}])=>void}
 */
function Tester(array) {
    return array.forEach((element,index) => {
        it(`Testing ${index} (expected: ${element.expected}) : => ${element.actual}`, ()=>{
            assert.equal(
                element.actual, 
                element.expected)
        })
    });
}

/**
 * @type {(title: string, tests_array: [{actual, expected}])=>void}
 */
function Describer(title, tests_array) {
    return describe(title, ()=>{
        Tester(tests_array, tests_array)
    })
}
/**
 * @type {(arr_to_test: {title:string, content}[])}
 */
function Tester(arr_to_test) {
    arr_to_test.forEach((element) => {
        return Describer(
            element.title, 
            element.content)
    })
}

let Arrays_to_test = [
    {
        title: "Without <Language Pack>",
        content: tests.without_pack
    }, {
        title: "With <Language Pack>",
        content: tests.with_pack
    }
]

describe("Language() tester", ()=>{
    Tester(Arrays_to_test)
})