//// [tests/cases/compiler/typecheckIfCondition.ts] ////

//// [typecheckIfCondition.ts]
// both uses of module should be an undefined symbol
function myWrapper()
{
    if (!module.exports) module.exports = "";
    var x = null; // don't want to baseline output
}


//// [typecheckIfCondition.js]
function myWrapper() {
    if (!module.exports)
        module.exports = "";
    var x = null;
}
