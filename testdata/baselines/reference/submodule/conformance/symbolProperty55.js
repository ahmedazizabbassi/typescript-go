//// [tests/cases/conformance/es6/Symbols/symbolProperty55.ts] ////

//// [symbolProperty55.ts]
var obj = {
    [Symbol.iterator]: 0
};

module M {
    var Symbol: SymbolConstructor;
    // The following should be of type 'any'. This is because even though obj has a property keyed by Symbol.iterator,
    // the key passed in here is the *wrong* Symbol.iterator. It is not the iterator property of the global Symbol.
    obj[Symbol.iterator];
}

//// [symbolProperty55.js]
var obj = {
    [Symbol.iterator]: 0
};
var M;
(function (M) {
    var Symbol;
    obj[Symbol.iterator];
})(M || (M = {}));
