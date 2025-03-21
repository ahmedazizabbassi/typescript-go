//// [tests/cases/compiler/memberOverride.ts] ////

//// [memberOverride.ts]
// An object initialiser accepts the first definition for the same property with a different type signature
// Should compile, since the second declaration of a overrides the first
var x = {
    a: "", 
    a: 5
}

var n: number = x.a;

//// [memberOverride.js]
var x = {
    a: "",
    a: 5
};
var n = x.a;
