//// [tests/cases/compiler/implicitAnyDeclareMemberWithoutType2.ts] ////

//// [implicitAnyDeclareMemberWithoutType2.ts]
// this should be an error
class C {
    public x = null;// error at "x"
    public x1: string  // no error

    constructor(c1, c2, c3: string) { }  // error at "c1, c2"
    funcOfC(f1, f2, f3: number) { }     // error at "f1,f2"
}


//// [implicitAnyDeclareMemberWithoutType2.js]
class C {
    x = null;
    x1;
    constructor(c1, c2, c3) { }
    funcOfC(f1, f2, f3) { }
}
