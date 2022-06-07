const reverseString = require("./reverse");

test("takes a string and returns it reversed", ()=>{
    expect(reverseString("obi")).toBe("ibo");
});