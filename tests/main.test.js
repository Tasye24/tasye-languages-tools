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
        Tester(tests_array)
    })
}
/**
 * @type {(arr_to_test: {title:string, content}[])}
 */
function Test_Master(list) {
    list.forEach((element) => {
        let title = element.title
        return Describer(`${title}`, element.content)
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
    Test_Master(Arrays_to_test)
})