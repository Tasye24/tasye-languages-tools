/* 
TasyeLanguageTools

by Tasye - 2023
*/

const Elisions = require("./Tools/Elisions");
const Pkg = require("./package.json")

/*
class TLT extends Elisions {
  constructor() {
    super()
    this.info["version"] = Pkg["version"]
    this.info["author"]  = Pkg["author"]  
  }
}*/

class TLT {
  constructor() {
    this.Elisions = new Elisions
    this.__info__ = {
      "author": Pkg["author"],
      "version": Pkg["version"]
    }
  }
}

module.exports = TLT