//// [tests/cases/compiler/hidingIndexSignatures.ts] ////

//// [hidingIndexSignatures.ts]
interface A {
    [a: string]: {};
}

interface B extends A {
    [a: string]: number; // Number is not a subtype of string.  Should error.
}

var b: B;
b[""]; // Should be number
var a: A;
a[""]; // Should be {}

//// [hidingIndexSignatures.js]
var b;
b[""];
var a;
a[""];
