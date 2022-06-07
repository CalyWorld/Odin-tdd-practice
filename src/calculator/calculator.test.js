import { sum } from "./calculator";
import { subtract } from "./calculator";
import { divide } from "./calculator";
import {multiply} from "./calculator"

test("takes 2 numbers and returns it's sum", ()=>{
    expect(sum(1,1)).toBe(2);
});

test("takes 2 numbers and returns it's subtraction", ()=>{
    expect(subtract(1,1)).toBe(0);
});

test("takes 2 numbers and returns it's division", ()=>{
    expect(divide(10, 5)).toBe(2);
});

test("takes 2 numbers and returns it's multiplication", ()=>{
    expect(multiply(5,100)).toBe(500);
});