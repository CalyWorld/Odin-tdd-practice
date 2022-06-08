
import {caesarCipher} from "./caesar"


test("characters have been shifted Once", ()=>{
    expect(caesarCipher("Defend the east wall of the castle!", 1)).toBe("Efgfoe uif fbtu xbmm pg uif dbtumf!");
});

test("characters have been shifted five times", ()=>{
    expect(caesarCipher("I love javascript", 2)).toBe("K nqxg lcxcuetkrv");
});

