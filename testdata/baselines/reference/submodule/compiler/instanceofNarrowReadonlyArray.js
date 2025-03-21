//// [tests/cases/compiler/instanceofNarrowReadonlyArray.ts] ////

//// [instanceofNarrowReadonlyArray.ts]
// @strict

function narrow(x: readonly number[] | number): readonly number[] {
    if (x instanceof Array) {
        return x;
    } else {
        return [x];
    }
}

//// [instanceofNarrowReadonlyArray.js]
function narrow(x) {
    if (x instanceof Array) {
        return x;
    }
    else {
        return [x];
    }
}
