//// [tests/cases/compiler/narrowingTypeofUndefined1.ts] ////

//// [narrowingTypeofUndefined1.ts]
declare const a: { error: { prop: string }, result: undefined } | { error: undefined, result: { prop: number } }

if (typeof a.error === 'undefined') {
    a.result.prop; // number
}
else {
    a.error.prop; // string
}

if (typeof a.error !== 'undefined') {
    a.error.prop; // string
}
else {
    a.result.prop; // number
}


//// [narrowingTypeofUndefined1.js]
if (typeof a.error === 'undefined') {
    a.result.prop;
}
else {
    a.error.prop;
}
if (typeof a.error !== 'undefined') {
    a.error.prop;
}
else {
    a.result.prop;
}
