//// [tests/cases/compiler/genericImplements.ts] ////

//// [genericImplements.ts]
class A { a; };
class B { b; };
interface I {
    f<T extends A>(): T;
} // { f: () => { a; } }

// OK
class X implements I {  
    f<T extends B>(): T { return undefined; }
} // { f: () => { b; } }

// OK
class Y implements I {
    f<T extends A>(): T { return undefined; }
} // { f: () => { a; } }

// OK
class Z implements I {
    f<T>(): T { return undefined; }
} // { f: <T>() => T } 

//// [genericImplements.js]
class A {
    a;
}
;
class B {
    b;
}
;
class X {
    f() { return undefined; }
}
class Y {
    f() { return undefined; }
}
class Z {
    f() { return undefined; }
}
