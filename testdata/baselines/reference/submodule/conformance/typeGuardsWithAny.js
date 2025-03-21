//// [tests/cases/conformance/expressions/typeGuards/typeGuardsWithAny.ts] ////

//// [typeGuardsWithAny.ts]
var x: any = { p: 0 };

if (x instanceof Object) {
    x.p; // No error, type any unaffected by instanceof type guard
}
else {
    x.p; // No error, type any unaffected by instanceof type guard
}

if (typeof x === "string") {
    x.p; // Error, type any narrowed by primitive type check
}
else {
    x.p; // No error, type unaffected in this branch
}

if (typeof x === "number") {
    x.p; // Error, type any narrowed by primitive type check
}
else {
    x.p; // No error, type unaffected in this branch
}

if (typeof x === "boolean") {
    x.p; // Error, type any narrowed by primitive type check
}
else {
    x.p; // No error, type unaffected in this branch
}

if (typeof x === "object") {
    x.p; // No error, type any only affected by primitive type check
}
else {
    x.p; // No error, type unaffected in this branch
}


//// [typeGuardsWithAny.js]
var x = { p: 0 };
if (x instanceof Object) {
    x.p;
}
else {
    x.p;
}
if (typeof x === "string") {
    x.p;
}
else {
    x.p;
}
if (typeof x === "number") {
    x.p;
}
else {
    x.p;
}
if (typeof x === "boolean") {
    x.p;
}
else {
    x.p;
}
if (typeof x === "object") {
    x.p;
}
else {
    x.p;
}
