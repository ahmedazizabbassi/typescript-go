//// [tests/cases/compiler/generics2.ts] ////

//// [generics2.ts]
interface A { a: string; }
interface B extends A { b: string; }
interface C extends B { c: string; }
interface G<T, U extends B> {
    x: T;
    y: U;
}


var v1: {
    x: { a: string; }
    y: { a: string; b: string; c: string };
}; // Ok


var v2: G<{ a: string }, C>;   // Ok, equivalent to G<A, C>
var v3: G<A, A>;               // Error, A not valid argument for U
var v4: G<G<A, B>, C>;         // Ok
var v5: G<any, any>;           // Error, any does not satisfy constraint B
var v6: G<any>;                // Error, wrong number of arguments
var v7: G;                     // Error, no type arguments


//// [generics2.js]
var v1;
var v2;
var v3;
var v4;
var v5;
var v6;
var v7;
