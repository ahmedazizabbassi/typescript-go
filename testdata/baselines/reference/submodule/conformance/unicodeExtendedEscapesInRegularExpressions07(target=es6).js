//// [tests/cases/conformance/es6/unicodeExtendedEscapes/unicodeExtendedEscapesInRegularExpressions07.ts] ////

//// [unicodeExtendedEscapesInRegularExpressions07.ts]
// ES6 Spec - 10.1.1 Static Semantics: UTF16Encoding (cp)
//  1. Assert: 0 ≤ cp ≤ 0x10FFFF.
var x = /\u{110000}/gu;


//// [unicodeExtendedEscapesInRegularExpressions07.js]
var x = /\u{110000}/gu;
