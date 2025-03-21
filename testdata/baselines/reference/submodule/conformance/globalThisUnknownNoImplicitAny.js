//// [tests/cases/conformance/es2019/globalThisUnknownNoImplicitAny.ts] ////

//// [globalThisUnknownNoImplicitAny.ts]
declare let win: Window & typeof globalThis;

// all accesses should be errors
win.hi
this.hi
globalThis.hi

win['hi']
this['hi']
globalThis['hi']


//// [globalThisUnknownNoImplicitAny.js]
win.hi;
this.hi;
globalThis.hi;
win['hi'];
this['hi'];
globalThis['hi'];
