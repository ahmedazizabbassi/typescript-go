//// [tests/cases/compiler/indexSignatureOfTypeUnknownStillRequiresIndexSignature.ts] ////

//// [indexSignatureOfTypeUnknownStillRequiresIndexSignature.ts]
declare function f<T extends unknown = unknown>(x: { [x: string]: T }): T;

var stooges = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60 }
];

f(stooges); // Should throw


//// [indexSignatureOfTypeUnknownStillRequiresIndexSignature.js]
var stooges = [
    { name: "moe", age: 40 },
    { name: "larry", age: 50 },
    { name: "curly", age: 60 }
];
f(stooges);
