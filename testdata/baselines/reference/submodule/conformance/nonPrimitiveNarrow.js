//// [tests/cases/conformance/types/nonPrimitive/nonPrimitiveNarrow.ts] ////

//// [nonPrimitiveNarrow.ts]
class Narrow {
    narrowed: boolean
}

var a: object

if (a instanceof Narrow) {
    a.narrowed; // ok
    a = 123; // error
}

if (typeof a === 'number') {
    a.toFixed(); // error, never
}

var b: object | null

if (typeof b === 'object') {
   b.toString(); // ok, object | null
} else {
   b.toString(); // error, never
}


//// [nonPrimitiveNarrow.js]
class Narrow {
    narrowed;
}
var a;
if (a instanceof Narrow) {
    a.narrowed;
    a = 123;
}
if (typeof a === 'number') {
    a.toFixed();
}
var b;
if (typeof b === 'object') {
    b.toString();
}
else {
    b.toString();
}
