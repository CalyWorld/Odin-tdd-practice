const capitalize = require("./capitalize");

test("returns string with first Character Capitalized", ()=>{
    expect(capitalize("obi")).toBe("Obi");
})