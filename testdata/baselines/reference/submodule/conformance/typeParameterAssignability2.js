//// [tests/cases/conformance/types/typeRelationships/assignmentCompatibility/typeParameterAssignability2.ts] ////

//// [typeParameterAssignability2.ts]
// type parameters are not assignable to one another unless directly or indirectly constrained to one another

function foo<T, U extends T>(t: T, u: U) {
    t = u; // error
    u = t; // ok
}

function foo2<T extends U, U>(t: T, u: U) {
    t = u; // error
    u = t; // ok
}

function foo3<T extends U, U extends V, V>(t: T, u: U, v: V) {
    t = u; // error
    u = t;

    t = v; // error
    v = t; // ok

    u = v; // error
    v = u; // ok
}

function foo4<T extends U, U extends V, V extends Date>(t: T, u: U, v: V) {
    t = u; // error
    t = v; // error
    t = new Date(); // error

    u = t;
    u = v; // error
    u = new Date(); // error

    v = t;
    v = u;
    v = new Date(); // ok

    var d: Date;
    d = t; // ok
    d = u; // ok
    d = v; // ok
}

// same as foo4 with different type parameter ordering
function foo5<V extends Date, U extends V, T extends U>(t: T, u: U, v: V) {
    t = u; // error
    t = v; // error
    t = new Date(); // error

    u = t;
    u = v; // error
    u = new Date(); // error

    v = t;
    v = u;
    v = new Date(); // ok

    var d: Date;
    d = t; // ok
    d = u; // ok
    d = v; // ok
}

function foo6<T extends U, U, V>(t: T, u: U, v: V) {
    t = u; // error
    t = v; // error

    u = t; // ok
    u = v; // error

    v = t; // error
    v = u; // error
}

//// [typeParameterAssignability2.js]
function foo(t, u) {
    t = u;
    u = t;
}
function foo2(t, u) {
    t = u;
    u = t;
}
function foo3(t, u, v) {
    t = u;
    u = t;
    t = v;
    v = t;
    u = v;
    v = u;
}
function foo4(t, u, v) {
    t = u;
    t = v;
    t = new Date();
    u = t;
    u = v;
    u = new Date();
    v = t;
    v = u;
    v = new Date();
    var d;
    d = t;
    d = u;
    d = v;
}
function foo5(t, u, v) {
    t = u;
    t = v;
    t = new Date();
    u = t;
    u = v;
    u = new Date();
    v = t;
    v = u;
    v = new Date();
    var d;
    d = t;
    d = u;
    d = v;
}
function foo6(t, u, v) {
    t = u;
    t = v;
    u = t;
    u = v;
    v = t;
    v = u;
}
