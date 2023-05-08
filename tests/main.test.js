const assert = require("assert")
const library = require("../index.js")

let TLTools = new library
let language = TLTools.Elisions.elision

let tests = {
    without_pack: [
        {
            actual: language("Andréa", 0,{full: "de",short: "d'"}),
            expected: "d'Andréa"
        }, {
            actual: language("Bobby", 0,{full: "de",short: "d'"}),
            expected: "de Bobby"
        }
    ],
    with_pack: [
        {
            actual: language("Andréa", 1, "de", "fr-FR"),
            expected: "d'Andréa"
        }, {
            actual: language("bus", 1, "le", "fr-FR"),
            expected: "le bus"
        }, {
            actual: language("autobus", 1, "lo", "it-IT"),
            expected: "l'autobus"
        }, {
            actual: language("fratello", 1, "lo", "it-IT"),
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

console.log(`
Tasye Language Tools (v${TLTools.__info__["version"]})
List of Languages avaible: ${TLTools.Elisions.info.languages.join(", ")}
`)

describe("Elisions (Elision.elision) tester", ()=>{
    Test_Master(Arrays_to_test)
})